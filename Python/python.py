"""
boolean = False
"""

# print boolean


person = {
    'name': 'Michael',
    'name': 'Stuff'
}


my_list = ['hi', 32, 90.4]


print my_list[2]


"""

 PYTHON            JS
--------        --------
       DATA TYPES
string          string
int
float           number
double
boo             boolean
dictionary      object
list            array
tuple           immutable array
none            null



       METHODS
elif            else if


Python specifics
- No curly braces or semicolons, use indentations
"""

my_variable = 2

if my_variable is not None:
    print my_variable

hello = 'hello'
goodbye = 'goodbye'

if 3 > 2:
    if 5 > 6:
        if 7 > 9:
            print hello
    else:
        print goodbye


"""
For if statements, must evaluate to true or False

if 2 + 2 == 4:

"""

"""
 does what a forloop does to iterate up to 11 range(start, end, increment)
for i in range(0, 12):
    print i
"""

for i in range(255):
    print i


ourlist = [1, 2, 3, 4, 5, 6, 7, 8, 9]

# same as for ... in ... in javascript
for item in ourlist:
    print item

for i in range (len(ourlist)):
    print i




people = [{'name' : 'Alan',
            'beard' : True, }]

"""

[' '] is for dictionary
[num] is for lists & tuples
. is for objects

"""

for person in people:
    print person["name"]
    visible = True
    print visible


def happy_BirthdayEmily():
    print("Happy Birthday to you!")
    print("Happy Birthday to you!")
    print("Happy Birthday, dear Emily.")
    print("Happy Birthday to you!")


happy_BirthdayEmily()
happy_BirthdayEmily()
