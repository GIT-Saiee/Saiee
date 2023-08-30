import turtle
import time
pen=turtle.Turtle()
#Following loop is to go through 4 rows 
for i in range(4):
	#Following is for each single row of dots
	for j in range(4):
		pen.pendown()
		pen.dot(3)
		pen.up() 
		pen.forward(20)
	pen.backward(80)
	pen.right(90)
	pen.forward(20)
	pen.left(90)

pen.penup()
#Going backwards through each space 
		
pen.left(90)
pen.forward(20)

pen.right(90)
pen.forward(10)

pen.pendown()

pen.left(135)
pen.forward(20)

pen.backward(20)
pen.right(135)
pen.penup()
pen.forward(40)
pen.seth(45)
pen.pendown()
pen.forward(20)

pen.penup()
pen.left(45)
pen.forward(35)
pen.pendown()
pen.left(45)
pen.forward(20)



pen.left(45)
pen.penup()
pen.forward(40)
pen.pendown()
pen.seth(225)
pen.forward(20)




pen.ht()



time.sleep(60)
