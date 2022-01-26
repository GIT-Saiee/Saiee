import turtle
import math 
import time

pen = turtle.Turtle()
pen.down()
pen.dot()
pen.pencolor("orange")
degree=0
while degree<=360:
	pen.setheading(degree)
	pen.forward(50)
	pen.down()
	pen.dot()
	pen.up()
	pen.backward(50)
	degree=degree+1
pen.down()
pen.hideturtle()
time.sleep(100)

