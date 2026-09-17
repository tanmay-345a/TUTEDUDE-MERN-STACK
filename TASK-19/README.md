# Tanmay Shakya - Task(19): JavaScript DOM Project

# How to Run locally:
    1> Clone repository
    2> Open index.html in browser
    3> Test all the functionalities at the landing page.
    4> check Add Item, Skip Item and reflecting cart items with price value and total amount.
    5> Fill book now details and check book now functionality by "Book now" button.
    6> After Book now, you will get success message as confirmation for 5 seconds.
    7> After 5 seconds of success message, web page will reset to its initial state.

# Note : There is inconsistency in the task : So, I am taking care of assumptions according to my understanding :
    1> Task required instructions doesn't match with the video shared in task to match it.
    2> In video there is no - Add to Cart button, Add Item button is doing its functionality but in instructions both all are mentioned - Add to Cart, Skip Item, Add Item. 
    3> In vidoe there are labels shows above the input fields but I am going with the instructions only to match the task requirements, where only input fields are requried.
    4> In video it has been shown there is Phone number field in Book Now section, but in instructions it is said 3rd field should be Password feild. 
    5> Alot more inconsistency with the video shared for the task and instructions mentioned. So, I tried to go mostly with the instructions rather than video shared. Rest where I got confused I go with my understanding to fulfill the basic functionality.

# Task to cover :
    > Problem Statement: Develop a web application that allows users to browse and book services. The application should have a user-friendly interface with a navigation bar, a section to display added items, and another section to browse and select services. The user should be able to add services to their cart and book them.

    > Problem Description: The goal is to create a seamless and intuitive web application for users to explore, select, and book services. The application will consist of a navigation bar, a left section to display added items and facilitate booking, and a right section to showcase available services.

    > Navigation Bar :

        Logo and Navigation Links :
            >> Add a logo on the left side of the navigation bar.
            >> Include navigation links for "Home," "Services," "About Us," and "Contact Us."
            >> Display the username on the right side.
            >> Implement a red button for user logout.

    > Left Section :

        Display Added Items :
            >> Create a section to display items added by the user.
            >> Initially, the section should show that no items have been added.
            >> Include a dynamic list that gets updated when services are added from the right section.

        Total Amount :

            > Add the total amount at the bottom of the left section.
            > Initially set to 0, the total amount should update dynamically as services are added.

        Booking Form :

            > Create a form with a heading "Book Now" in the second div.
            > Include input fields for the user's full name, email, and password.
            > Place a "Book Now" button at the bottom to proceed with the booking.

    > Right Section :

        Browse Services :
            >> Display a section with the heading "Browse Our Services."
            >> Provide a brief description of the services available.

        Service Display :
            >> Showcase images of services along with their names and prices.
            >> Include "Skip Item" and "Add Item" buttons for each service.

        Cart and Booking Options :
            >> At the bottom of the right section, display information about adding items to the cart.
            >> Include buttons for "Add to Cart" and "Book Now" for the selected services.
