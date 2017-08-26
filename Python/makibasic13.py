# Algorithm 1
def get_1_to_255():
  for i in range(256):
    print i

# Algorithm 2
def sum_even_numbers():
  total = 0
  for i in range(0, 1002, 2):
    total = total + i
  print total

# Algorithm 3
def sum_odd_numbers():
  total = 0
  for i in range(1, 5001, 2):
    total = total + i
  print total

# Algorithm 4
def sum_nums_in_list(my_list):
  total = 0
  for num in my_list:
    total = total + num
  print total

# Algorithm 5
def find_max_value(my_list):
  maximum = my_list[0]
  for num in my_list:
    if num > maximum:
      maximum = num
  print max

# Algorithm 6
def find_avg(my_list):
  total = 0
  for num in my_list:
    total = total + num
  average = total / len(my_list)
  print average

# Algorithm 7
def list_of_odds():
  my_list = []
  for i in range(1, 51, 2):
    my_list.append(i)
  print my_list

# Algorithm 8
def greater_than_num(num, my_list):
  my_list.append(num)
  maximum = my_list[0]
  for num in my_list:
    if num > maximum:
      maximum = num
  print maximum


# Algorithm 9
def list_squared(my_list):
  index = 0
  for num in my_list:
    my_list[index] = num**num
    index = index + 1
  print my_list

# Algorithm 10
def no_negatives(my_list):
  index = 0
  for num in my_list:
    if num < 0:
      my_list[index] = 0
    index = index + 1
  print my_list

# Algorithm 11
def max_min_avg(my_list):
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
  first_val = my_list[0]
  last_val = my_list[len(my_list) - 1]
  my_list[0] = last_val
  my_list[len(my_list) - 1] = first_val
  print my_list

# Algorithm 13
def dojo_negatives(my_list):
  index = 0
  for num in my_list:
    if num < 0:
      my_list[index] = 'dojo'
    index = index + 1
  print my_list

"""
TEST CASES
"""
# get_1_to_255()

# sum_even_numbers()

# sum_odd_numbers()

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
