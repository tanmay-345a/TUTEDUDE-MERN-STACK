import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState([
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
  ]);

  const [selected, setSelected] = useState(null);
  const [turn, setTurn] = useState("White");
  const [moves, setMoves] = useState([]);
  const [status, setStatus] = useState("");

  const [whiteTime, setWhiteTime] = useState(600);
  const [blackTime, setBlackTime] = useState(600);
  const [gameOver, setGameOver] = useState(false);

  const [capturedWhite, setCapturedWhite] = useState([]);
  const [capturedBlack, setCapturedBlack] = useState([]);

  const [history, setHistory] = useState([]);

  const whitePieces = ["♙", "♖", "♘", "♗", "♕", "♔"];
  const blackPieces = ["♟", "♜", "♞", "♝", "♛", "♚"];

  const isWhite = (piece) => whitePieces.includes(piece);
  const isBlack = (piece) => blackPieces.includes(piece);

  const isInside = (row, col) =>
    row >= 0 && row < 8 && col >= 0 && col < 8;

  const isPathClear = (
    currentBoard,
    fromRow,
    fromCol,
    toRow,
    toCol
  ) => {
    const rowStep = Math.sign(toRow - fromRow);
    const colStep = Math.sign(toCol - fromCol);

    let row = fromRow + rowStep;
    let col = fromCol + colStep;

    while (row !== toRow || col !== toCol) {
      if (currentBoard[row][col] !== "") {
        return false;
      }

      row += rowStep;
      col += colStep;
    }

    return true;
  };

  const canPieceMove = (
    currentBoard,
    fromRow,
    fromCol,
    toRow,
    toCol,
    forAttack = false
  ) => {
    const piece = currentBoard[fromRow][fromCol];
    const target = currentBoard[toRow][toCol];

    if (!piece || !isInside(toRow, toCol)) {
      return false;
    }

    if (
      !forAttack &&
      ((isWhite(piece) && isWhite(target)) ||
        (isBlack(piece) && isBlack(target)))
    ) {
      return false;
    }

    const rowDiff = toRow - fromRow;
    const colDiff = toCol - fromCol;

    const absRow = Math.abs(rowDiff);
    const absCol = Math.abs(colDiff);

    // White Pawn
    if (piece === "♙") {
      if (forAttack) {
        return rowDiff === -1 && absCol === 1;
      }

      if (colDiff === 0 && target === "") {
        if (rowDiff === -1) return true;

        if (
          fromRow === 6 &&
          rowDiff === -2 &&
          currentBoard[5][fromCol] === ""
        ) {
          return true;
        }
      }

      return (
        absCol === 1 &&
        rowDiff === -1 &&
        isBlack(target)
      );
    }

    // Black Pawn
    if (piece === "♟") {
      if (forAttack) {
        return rowDiff === 1 && absCol === 1;
      }

      if (colDiff === 0 && target === "") {
        if (rowDiff === 1) return true;

        if (
          fromRow === 1 &&
          rowDiff === 2 &&
          currentBoard[2][fromCol] === ""
        ) {
          return true;
        }
      }

      return (
        absCol === 1 &&
        rowDiff === 1 &&
        isWhite(target)
      );
    }

    // Knight
    if (piece === "♘" || piece === "♞") {
      return (
        (absRow === 2 && absCol === 1) ||
        (absRow === 1 && absCol === 2)
      );
    }

    // King
    if (piece === "♔" || piece === "♚") {
      return absRow <= 1 && absCol <= 1;
    }

    // Rook
    if (piece === "♖" || piece === "♜") {
      return (
        (rowDiff === 0 || colDiff === 0) &&
        isPathClear(
          currentBoard,
          fromRow,
          fromCol,
          toRow,
          toCol
        )
      );
    }

    // Bishop
    if (piece === "♗" || piece === "♝") {
      return (
        absRow === absCol &&
        isPathClear(
          currentBoard,
          fromRow,
          fromCol,
          toRow,
          toCol
        )
      );
    }

    // Queen
    if (piece === "♕" || piece === "♛") {
      return (
        (rowDiff === 0 ||
          colDiff === 0 ||
          absRow === absCol) &&
        isPathClear(
          currentBoard,
          fromRow,
          fromCol,
          toRow,
          toCol
        )
      );
    }

    return false;
  };

  const findKing = (currentBoard, color) => {
    const king = color === "White" ? "♔" : "♚";

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        if (currentBoard[row][col] === king) {
          return { row, col };
        }
      }
    }

    return null;
  };

  const isSquareAttacked = (
    currentBoard,
    row,
    col,
    byColor
  ) => {
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const piece = currentBoard[r][c];

        if (
          (byColor === "White" && isWhite(piece)) ||
          (byColor === "Black" && isBlack(piece))
        ) {
          if (
            canPieceMove(
              currentBoard,
              r,
              c,
              row,
              col,
              true
            )
          ) {
            return true;
          }
        }
      }
    }

    return false;
  };

  const isInCheck = (currentBoard, color) => {
    const king = findKing(currentBoard, color);

    if (!king) return false;

    const opponent =
      color === "White" ? "Black" : "White";

    return isSquareAttacked(
      currentBoard,
      king.row,
      king.col,
      opponent
    );
  };

  const makeTemporaryMove = (
    currentBoard,
    fromRow,
    fromCol,
    toRow,
    toCol
  ) => {
    const newBoard = currentBoard.map((row) => [...row]);

    newBoard[toRow][toCol] =
      newBoard[fromRow][fromCol];

    newBoard[fromRow][fromCol] = "";

    return newBoard;
  };

  const moveLeavesKingSafe = (
    currentBoard,
    fromRow,
    fromCol,
    toRow,
    toCol,
    color
  ) => {
    const testBoard = makeTemporaryMove(
      currentBoard,
      fromRow,
      fromCol,
      toRow,
      toCol
    );

    return !isInCheck(testBoard, color);
  };

  const isLegalMove = (
    currentBoard,
    fromRow,
    fromCol,
    toRow,
    toCol,
    color
  ) => {
    if (
      !canPieceMove(
        currentBoard,
        fromRow,
        fromCol,
        toRow,
        toCol
      )
    ) {
      return false;
    }

    return moveLeavesKingSafe(
      currentBoard,
      fromRow,
      fromCol,
      toRow,
      toCol,
      color
    );
  };

  const hasLegalMove = (
    currentBoard,
    color
  ) => {
    for (let fromRow = 0; fromRow < 8; fromRow++) {
      for (let fromCol = 0; fromCol < 8; fromCol++) {
        const piece = currentBoard[fromRow][fromCol];

        if (
          (color === "White" && !isWhite(piece)) ||
          (color === "Black" && !isBlack(piece))
        ) {
          continue;
        }

        for (let toRow = 0; toRow < 8; toRow++) {
          for (let toCol = 0; toCol < 8; toCol++) {
            if (
              isLegalMove(
                currentBoard,
                fromRow,
                fromCol,
                toRow,
                toCol,
                color
              )
            ) {
              return true;
            }
          }
        }
      }
    }

    return false;
  };

  // Timer
  useEffect(() => {
    if (gameOver) return;

    const timer = setInterval(() => {
      if (turn === "White") {
        setWhiteTime((time) => {
          if (time <= 1) {
            setGameOver(true);
            setStatus(
              "Black wins! White's time is over."
            );
            return 0;
          }

          return time - 1;
        });
      } else {
        setBlackTime((time) => {
          if (time <= 1) {
            setGameOver(true);
            setStatus(
              "White wins! Black's time is over."
            );
            return 0;
          }

          return time - 1;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [turn, gameOver]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  // Undo
  const undoMove = () => {
    if (history.length === 0) {
      alert("No move to undo!");
      return;
    }

    const previous = history[history.length - 1];

    setBoard(previous.board);
    setTurn(previous.turn);
    setMoves(previous.moves);
    setWhiteTime(previous.whiteTime);
    setBlackTime(previous.blackTime);
    setCapturedWhite(previous.capturedWhite);
    setCapturedBlack(previous.capturedBlack);
    setStatus("");
    setGameOver(false);
    setSelected(null);

    setHistory(history.slice(0, -1));
  };

  const handleSquareClick = (row, col) => {
    if (gameOver) return;

    const piece = board[row][col];

    // Select piece
    if (selected === null) {
      if (piece === "") return;

      if (turn === "White" && !isWhite(piece)) {
        alert("It is White's turn!");
        return;
      }

      if (turn === "Black" && !isBlack(piece)) {
        alert("It is Black's turn!");
        return;
      }

      setSelected({ row, col });
      return;
    }

    // Select another own piece
    if (
      (turn === "White" && isWhite(piece)) ||
      (turn === "Black" && isBlack(piece))
    ) {
      setSelected({ row, col });
      return;
    }

    // Check legal move
    if (
      !isLegalMove(
        board,
        selected.row,
        selected.col,
        row,
        col,
        turn
      )
    ) {
      alert("Illegal move!");
      return;
    }

    // Save current state for Undo
    setHistory([
      ...history,
      {
        board: board.map((r) => [...r]),
        turn,
        moves: [...moves],
        whiteTime,
        blackTime,
        capturedWhite: [...capturedWhite],
        capturedBlack: [...capturedBlack],
      },
    ]);

    const movingPiece =
      board[selected.row][selected.col];

    const capturedPiece = board[row][col];

    const newBoard = makeTemporaryMove(
      board,
      selected.row,
      selected.col,
      row,
      col
    );

   // Pawn Promotion
if (
  (movingPiece === "♙" && row === 0) ||
  (movingPiece === "♟" && row === 7)
) {
  newBoard[row][col] =
    movingPiece === "♙" ? "♕" : "♛";
}

// Update board after every move
setBoard(newBoard);

    // Captured pieces
    if (capturedPiece) {
      if (isWhite(capturedPiece)) {
        setCapturedWhite([
          ...capturedWhite,
          capturedPiece,
        ]);
      } else {
        setCapturedBlack([
          ...capturedBlack,
          capturedPiece,
        ]);
      }
    }

    // Move notation
    const file = String.fromCharCode(97 + col);
    const rank = 8 - row;

    const pieceLetters = {
      "♙": "",
      "♟": "",
      "♖": "R",
      "♜": "R",
      "♘": "N",
      "♞": "N",
      "♗": "B",
      "♝": "B",
      "♕": "Q",
      "♛": "Q",
      "♔": "K",
      "♚": "K",
    };

    const notation =
      pieceLetters[movingPiece] +
      (capturedPiece ? "x" : "") +
      file +
      rank;

    setMoves([
      ...moves,
      notation,
    ]);

    const nextTurn =
      turn === "White" ? "Black" : "White";

    setTurn(nextTurn);
    setSelected(null);

    // Check and Checkmate
    if (isInCheck(newBoard, nextTurn)) {
      if (!hasLegalMove(newBoard, nextTurn)) {
        setGameOver(true);
        setStatus(
          `Checkmate! ${turn} wins!`
        );
      } else {
        setStatus(
          `${nextTurn} is in Check!`
        );
      }
    } else {
      if (!hasLegalMove(newBoard, nextTurn)) {
        setGameOver(true);
        setStatus("Stalemate! Game Draw.");
      } else {
        setStatus("");
      }
    }
  };

  return (
    <div className="app">
      <h1>♟ Offline Chess Game ♟</h1>

      <div className="game">

        {/* BOARD */}
        <div className="board">
          {board.map((row, rowIndex) =>
            row.map((piece, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                onClick={() =>
                  handleSquareClick(
                    rowIndex,
                    colIndex
                  )
                }
                className={`square ${
                  (rowIndex + colIndex) % 2 === 0
                    ? "light"
                    : "dark"
                } ${
                  selected &&
                  selected.row === rowIndex &&
                  selected.col === colIndex
                    ? "selected"
                    : ""
                }`}
              >
                {piece}
              </div>
            ))
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="info">

          <h2>
            {gameOver
              ? "Game Over"
              : `${turn}'s Turn`}
          </h2>

          {status && (
            <h3>{status}</h3>
          )}

          {/* TIMER */}
          <div className="timers">
            <div>
              <b>White</b>
              <p>
                {formatTime(whiteTime)}
              </p>
            </div>

            <div>
              <b>Black</b>
              <p>
                {formatTime(blackTime)}
              </p>
            </div>
          </div>

          {/* UNDO BUTTON */}
          <button
            onClick={undoMove}
            className="undo-button"
          >
            ↩ Undo Last Move
          </button>

          <button
          onClick={() => window.location.reload()}
          className="reset-button"
          >
          🔄 New Game
          </button>

          {/* CAPTURED PIECES */}
          <h3>Captured Pieces</h3>

          <div className="captured">
            <p>
              <b>White:</b>{" "}
              {capturedWhite.length > 0
                ? capturedWhite.join(" ")
                : "None"}
            </p>

            <p>
              <b>Black:</b>{" "}
              {capturedBlack.length > 0
                ? capturedBlack.join(" ")
                : "None"}
            </p>
          </div>

          {/* MOVE LIST */}
          <h3>Move List</h3>

          <div className="moves">
            {moves.length === 0 ? (
              <p>No moves yet</p>
            ) : (
              moves.map((move, index) => (
                <p key={index}>
                  {index + 1}. {move}
                </p>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;