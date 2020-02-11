"""
Your classmates asked you to copy some paperwork for them. You know that there are 'n' 
classmates and the paperwork has 'm' pages.
Your task is to calculate how many blank pages do you need.
Note! if n or m < 0 return 0! Waiting for translations and Feedback! Thanks!


"""

def paperwork(n, m):
    if n < 0 or m < 0:
        return 0
    else: 
        return n * m


# One liner:
def paperwork(n, m):
    return n * m if n > 0 and m > 0 else 0