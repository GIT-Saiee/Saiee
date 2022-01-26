import turtle
import math 

t=turtle.Turtle()
radius =50
degree = 0
t.dot()
while degree <= 360:
	rd = degree * (math.pi/180.0)
	x=radius*math.cos(rd)
	y=radius*math.sin(rd)
	print("(x,y)",x ,y );
	#turtle.up()
	turtle.ht()
	turtle.goto(x,y)
	turtle.st()
	turtle.down()
	#turtle.dot()
	degree=degree+10

sleep(60)
