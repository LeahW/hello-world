# RobomowATL Virtual Salesman
# Generates a recommendation of the correct Robomow unit to use on your lawn

import random

sales_name = ["Fred", "Yvonne", "Cedric", "Pat", "Kendall", "Toby", "Darla", "Brice"]
salesman = random.choice(sales_name)

print ("Hello, New User!")
name = input('What is your name? ')

print ("Hello " + name + "! My name is " + salesman + ". I'd be happy to assist you.")
lawn_size = int(input('Please tell me the size of your lawn in square feet without using commas '))
print ("Thank you")

hills = input('Does your yard have steep slopes? Please respond with yes or no.')
print ("Thank you.")

if lawn_size < 6400 and hills == "no":
    recommendation = "Robomow RC306"
elif lawn_size < 6400:
    recommendation = "Robomow RS612"
elif lawn_size < 23000:
    recommendation = "Robomow RS622"
else: recommendation = "Robomow RS630"

print ("Based on your responses, I recommend our " + recommendation + " model.")

if recommendation == "Robomow RC306":
    description = "6,400 square feet of lawn on a lot of up to 1/4 acre."
elif recommendation == "Robomow RS612":
    description = "13,000  square feet of lawn on a lot of up to 1/3 acre, with slopes up to 20 degrees or 35% grade."
elif recommendation == "Robomow RS622":
    description = "23,000  square feet of lawn on a lot of up to 1/2 acre, with slopes up to 20 degrees or 35% grade."
else: description = "32,000  square feet of lawn on a lot of up to 3/4 acre, with slopes up to 20 degrees or 35% grade."

print ("This robot mower features a fully rechargeble electric motor, is 100% rain-proof, and will beautifully maintain " + description)
print ("Please contact us at RobomowATL@gmail.com to find out more or arrange a free demonstration. Thanks for using the RobomowATL Virtual Salesman app. Have a nice day, " + name + "! Goodbye!")



