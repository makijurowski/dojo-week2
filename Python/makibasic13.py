"""List of the Basic 13 Algorithms rewritten in Python from JS."""

# Algorithm 1
def get_1_to_255():
    """Counts all the numbers up through 255."""
    for i in range(256):
        print i

# Algorithm 2
def sum_even_numbers():
    """Adds all the even numbers through 1000."""
    total = 0
    for i in range(0, 1002, 2):
        total = total + i
    print total

# Algorithm 3
def sum_odd_numbers():
    """Adds all the odd numbers through 5000."""
    total = 0
    for i in range(1, 5001, 2):
        total = total + i
    print total

# Algorithm 4
def sum_nums_in_list(my_list):
    "Adds all the numbers in a list."""
    total = 0
    for num in my_list:
        total = total + num
    print total

# Algorithm 5
def find_max_value(my_list):
    """Finds the max value in a list."""
    maximum = my_list[0]
    for num in my_list:
        if num > maximum:
            maximum = num
    print max

# Algorithm 6
def find_avg(my_list):
    "Finds the average value of numbers in a list."""
    total = 0
    for num in my_list:
        total = total + num
    average = total / len(my_list)
    print average

# Algorithm 7
def list_of_odds():
    """Prints a list of odd numbers through 50."""
    my_list = []
    for i in range(1, 51, 2):
        my_list.append(i)
    print my_list

# Algorithm 8
def greater_than_num(num, my_list):
    """Checks to see if Y value is greater than numbers in a list."""
    my_list.append(num)
    maximum = my_list[0]
    for num in my_list:
        if num > maximum:
            maximum = num
    print maximum


# Algorithm 9
def list_squared(my_list):
    """Squares all the numbers in a list."""
    index = 0
    for num in my_list:
        my_list[index] = num**num
        index = index + 1
    print my_list

# Algorithm 1 #
def no_negatives(my_list):
    """Replaces negative numbers with a 0."""
    index = 0
    for num in my_list:
        if num < 0:
            my_list[index] = 0
        index = index + 1
    print my_list

# Algorithm 11
def max_min_avg(my_list):
    """Calculates the max, min, and average of numbers in a list."""
    new_list = []
    total = 0
    minimum = my_list[0]
    maximum = my_list[0]
    for num in my_list:
        if num < minimum:
            minimum = num
        if num > maximum:
            maximum = num
        total = total + num
    average = total / len(my_list)
    new_list.append(minimum)
    new_list.append(maximum)
    new_list.append(average)
    print new_list

# Algorithm 12
def flip_values(my_list):
    """Reverse the values in a list."""
    first_val = my_list[0]
    last_val = my_list[len(my_list) - 1]
    my_list[0] = last_val
    my_list[len(my_list) - 1] = first_val
    print my_list

# Algorithm 13
def dojo_negatives(my_list):
    """Replaces the negatives in a list with the word 'dojo'."""
    index = 0
    for num in my_list:
        if num < 0:
            my_list[index] = 'dojo'
        index = index + 1
    print my_list


"""
TEST CASES
"""
get_1_to_255()

sum_even_numbers()

sum_odd_numbers()

# sum_nums_in_list([1, 2, 3, 4, 5])

# find_max_value([1, 6, 3, 4, 5])

# find_avg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

# max_min_avg([9, 2, 13, 4, -1, 6, 7, 0, 9, 1])

# list_of_odds()

# greater_than_num(17, [1, -2, 2, 2, 11, 5])

# list_squared([1, 2, 3])

# no_negatives([-1, -5, 5, 3, -10])

# flip_values([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

# dojo_negatives([-1, -5, 5, 3, -10])
