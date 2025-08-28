import sqlite3

fruits_list = [
    {
        "Name": "apple",
        "FloweringMonth": "April",
        "FruitingMonth": "May",
        "Fertilizer": "All-purpose fertilize",
        "Sunlight": "Full sun",
        "Water": "Regular watering", 
        "Soil": "Well-drained loamy soil", 
        "HarvestTime": "Late summer to early fall",
        "Count_per_year" : 30   },
    {
        "Name": "Cherry",
        "FloweringMonth": "April",
        "FruitingMonth": "May",
        "Fertilizer": "All-purpose fertilize",
        "Sunlight": "Full sun",
        "Water": "Regular watering", 
        "Soil": "Well-drained loamy soil", 
        "HarvestTime": "Late summer to early fall",
        "Count_per_year" : 50   },
     {
        "Name": "Donut Peach",
        "FloweringMonth": "April",
        "FruitingMonth": "May",
        "Fertilizer": "All-purpose fertilize",
        "Sunlight": "Full sun",
        "Water": "Regular watering", 
        "Soil": "Well-drained loamy soil", 
        "HarvestTime": "Late summer to early fall",
        "Count_per_year" : 12  } ,

     {
        "Name": "fig",
        "FloweringMonth": "no flower",
        "FruitingMonth": "May",
        "Fertilizer": "All-purpose fertilize",
        "Sunlight": "Full sun",
        "Water": "Regular watering", 
        "Soil": "Well-drained loamy soil", 
        "HarvestTime": "Late summer to early fall",
        "Count_per_year" : 100   },
    {
        "Name": "grape",
        "FloweringMonth": "April",
        "FruitingMonth": "May",
        "Fertilizer": "All-purpose fertilize",
        "Sunlight": "Full sun",
        "Water": "Regular watering", 
        "Soil": "Well-drained loamy soil", 
        "HarvestTime": "Late summer to early fall",
        "Count_per_year" : 50   },
    {
        "Name": "orange",
        "FloweringMonth": "April",
        "FruitingMonth": "May",
        "Fertilizer": "All-purpose fertilize",
        "Sunlight": "Full sun",
        "Water": "Regular watering", 
        "Soil": "Well-drained loamy soil", 
        "HarvestTime": "Late summer to early fall",
        "Count_per_year" : 100 },
         {
        "Name": "peach",
        "FloweringMonth": "April",
        "FruitingMonth": "May",
        "Fertilizer": "All-purpose fertilize",
        "Sunlight": "Full sun",
        "Water": "Regular watering", 
        "Soil": "Well-drained loamy soil", 
        "HarvestTime": "Late summer to early fall",
        "Count_per_year" : 25  } ,
         {
        "Name": "pear",
        "FloweringMonth": "April",
        "FruitingMonth": "May",
        "Fertilizer": "All-purpose fertilize",
        "Sunlight": "Full sun",
        "Water": "Regular watering", 
        "Soil": "Well-drained loamy soil", 
        "HarvestTime": "Late summer to early fall",
        "Count_per_year" : 30   } ,
         {
        "Name": "plum",
        "FloweringMonth": "April",
        "FruitingMonth": "May",
        "Fertilizer": "All-purpose fertilize",
        "Sunlight": "Full sun",
        "Water": "Regular watering", 
        "Soil": "Well-drained loamy soil", 
        "HarvestTime": "Late summer to early fall",
        "Count_per_year" : 30   } ,
         {
        "Name": "passion fruit",
        "FloweringMonth": "April",
        "FruitingMonth": "May",
        "Fertilizer": "All-purpose fertilize",
        "Sunlight": "Full sun",
        "Water": "Regular watering", 
        "Soil": "Well-drained loamy soil", 
        "HarvestTime": "Late summer to early fall",
        "Count_per_year" : 30   } ,
        {
        "Name": "persimon",
        "FloweringMonth": "April",
        "FruitingMonth": "May",
        "Fertilizer": "All-purpose fertilize",
        "Sunlight": "Full sun",
        "Water": "Regular watering", 
        "Soil": "Well-drained loamy soil", 
        "HarvestTime": "Late summer to early fall",
        "Count_per_year" : 75 } ,   
         {
        "Name": "pomegranate",
        "FloweringMonth": "April",
        "FruitingMonth": "May",
        "Fertilizer": "All-purpose fertilize",
        "Sunlight": "Full sun",
        "Water": "Regular watering", 
        "Soil": "Well-drained loamy soil", 
        "HarvestTime": "Late summer to early fall",
        "Count_per_year" : 5} 
]
# fruits = ["apple","cherry","donut peach","fig","grape","orange","peach","pear","plum","passion fruit","persimon","pomegranate"]
# fruits = sorted(fruits)
connection = sqlite3.connect("fruits.db")
cursor = connection.cursor()   
cursor.execute("CREATE TABLE IF NOT EXISTS fruits (id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, FloweringMonth TEXT, FruitingMonth TEXT, Fertilizer TEXT, Sunlight TEXT, Water TEXT, Soil TEXT, HarvestTime TEXT,Count_per_year INTEGER)")

for fruit in fruits_list:
    cursor.execute("INSERT INTO fruits (Name, FloweringMonth, FruitingMonth, Fertilizer, Sunlight, Water, Soil, HarvestTime, Count_per_year) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", (fruit["Name"], fruit["FloweringMonth"], fruit["FruitingMonth"], fruit["Fertilizer"], fruit["Sunlight"], fruit["Water"], fruit["Soil"], fruit["HarvestTime"], fruit["Count_per_year"]))       
#  fruit_list = [ (1, ""), (1999, "Grand Theft Auto 2"), (2001, "Grand Theft Auto III"), (2002, "Grand Theft Auto: Vice City"), (2004, "Grand Theft Auto: San Andreas"), (2008, "Grand Theft Auto IV"), (2013, "Grand Theft Auto V") ]
for row in cursor.execute("SELECT * FROM fruits"):
    print(row)
# cursor.executemany("INSERT INTO gta VALUES (?, ?)", release_list)
# print("**************************************************")
# for row in cursor.execute("SELECT * FROM gta"):
#     print(row)
# print("**************************************************")
# cursor.execute("SELECT * FROM gta WHERE year=2001")
# print(cursor.fetchall())    
# print("**************************************************")
# cursor.execute("UPDATE gta SET year=2000 WHERE title='Grand Theft Auto 2'")
# print("**************************************************")
# cursor.execute("DELETE FROM gta WHERE year=1999")
connection.commit()
connection.close()