import sqlite3
conn_images = sqlite3.connect('images.db')
cursor_images= conn_images.cursor()

fruits_list = [
    {
        "Name": "Apple",
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
        "Name": "Fig",
        "FloweringMonth": "no flower",
        "FruitingMonth": "May",
        "Fertilizer": "All-purpose fertilize",
        "Sunlight": "Full sun",
        "Water": "Regular watering", 
        "Soil": "Well-drained loamy soil", 
        "HarvestTime": "Late summer to early fall",
        "Count_per_year" : 100   },
    {
        "Name": "Grape",
        "FloweringMonth": "April",
        "FruitingMonth": "May",
        "Fertilizer": "All-purpose fertilize",
        "Sunlight": "Full sun",
        "Water": "Regular watering", 
        "Soil": "Well-drained loamy soil", 
        "HarvestTime": "Late summer to early fall",
        "Count_per_year" : 50   },
    {
        "Name": "Orange",
        "FloweringMonth": "April",
        "FruitingMonth": "May",
        "Fertilizer": "All-purpose fertilize",
        "Sunlight": "Full sun",
        "Water": "Regular watering", 
        "Soil": "Well-drained loamy soil", 
        "HarvestTime": "Late summer to early fall",
        "Count_per_year" : 100 },
         {
        "Name": "Peach",
        "FloweringMonth": "April",
        "FruitingMonth": "May",
        "Fertilizer": "All-purpose fertilize",
        "Sunlight": "Full sun",
        "Water": "Regular watering", 
        "Soil": "Well-drained loamy soil", 
        "HarvestTime": "Late summer to early fall",
        "Count_per_year" : 25  } ,
         {
        "Name": "Pear",
        "FloweringMonth": "April",
        "FruitingMonth": "May",
        "Fertilizer": "All-purpose fertilize",
        "Sunlight": "Full sun",
        "Water": "Regular watering", 
        "Soil": "Well-drained loamy soil", 
        "HarvestTime": "Late summer to early fall",
        "Count_per_year" : 30   } ,
         {
        "Name": "Plum",
        "FloweringMonth": "April",
        "FruitingMonth": "May",
        "Fertilizer": "All-purpose fertilize",
        "Sunlight": "Full sun",
        "Water": "Regular watering", 
        "Soil": "Well-drained loamy soil", 
        "HarvestTime": "Late summer to early fall",
        "Count_per_year" : 30   } ,
         {
        "Name": "Passion Fruit",
        "FloweringMonth": "April",
        "FruitingMonth": "May",
        "Fertilizer": "All-purpose fertilize",
        "Sunlight": "Full sun",
        "Water": "Regular watering", 
        "Soil": "Well-drained loamy soil", 
        "HarvestTime": "Late summer to early fall",
        "Count_per_year" : 30   } ,
        {
        "Name": "Persimon",
        "FloweringMonth": "April",
        "FruitingMonth": "May",
        "Fertilizer": "All-purpose fertilize",
        "Sunlight": "Full sun",
        "Water": "Regular watering", 
        "Soil": "Well-drained loamy soil", 
        "HarvestTime": "Late summer to early fall",
        "Count_per_year" : 75 } ,   
         {
        "Name": "Pomegranate",
        "FloweringMonth": "April",
        "FruitingMonth": "May",
        "Fertilizer": "All-purpose fertilize",
        "Sunlight": "Full sun",
        "Water": "Regular watering", 
        "Soil": "Well-drained loamy soil", 
        "HarvestTime": "Late summer to early fall",
        "Count_per_year" : 5} 
]

image_urls = {
    
    'Apple' : ["images/Fruits/Apple/apple_slices.jpg",
    "images/Fruits/Apple/apple.jpg",
    "images/Fruits/Apple/colored.jpg",
    ],
    'Orange' : ["images/Fruits/Orange/double.png",
    "images/Fruits/Orange/orange.png",
    "images/Fruits/Orange/peeled.png",
    "images/Fruits/Orange/slice.png"
    ]
}

def create_tables(): 
    connection1 = sqlite3.connect("fruits.db")
    cursor1 = connection1.cursor() 
    cursor1.execute("CREATE TABLE IF NOT EXISTS fruits (id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT COLLATE NOCASE, FloweringMonth TEXT, FruitingMonth TEXT, Fertilizer TEXT, Sunlight TEXT, Water TEXT, Soil TEXT, HarvestTime TEXT, Count_per_year INTEGER)")
    cursor1.execute("CREATE TABLE fruit_images (id INT PRIMARY KEY, fruit_id INT, image_url VARCHAR(255) NOT NULL, FOREIGN KEY (fruit_id) REFERENCES fruits(id))")
    connection1.commit()
    connection1.close()

def insert_fruits_data_into_tables():
    connection1 = sqlite3.connect("fruits.db")
    cursor1 = connection1.cursor()
    for fruit in fruits_list:
        cursor1.execute("INSERT INTO fruits (Name, FloweringMonth, FruitingMonth, Fertilizer, Sunlight, Water, Soil, HarvestTime, Count_per_year) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", (fruit["Name"], fruit["FloweringMonth"], fruit["FruitingMonth"], fruit["Fertilizer"], fruit["Sunlight"], fruit["Water"], fruit["Soil"], fruit["HarvestTime"], fruit["Count_per_year"]))       
        fruit_id = cursor1.lastrowid
        print(f"Inserted fruit '{fruit}' with ID: {fruit_id}")
        this_fruit_image_list = image_urls.get(fruit["Name"])
        if this_fruit_image_list is not None:
            for url in this_fruit_image_list:
                cursor1.execute("INSERT INTO fruit_images (fruit_id, image_url) VALUES (?, ?)", (fruit_id, url))
    connection1.commit()
    connection1.close()

def get_urls(fruit_name):
    connection1 = sqlite3.connect("fruits.db")
    cursor1 = connection1.cursor()
    cursor1.execute("SELECT f.Name, i.image_url FROM fruits f JOIN fruit_images i ON f.id = i.fruit_id WHERE f.name = ?", (fruit_name, ))
    results = cursor1.fetchall()
    url_list=[]
    for row in results:
        url_list.append(row)
    connection1.commit()
    connection1.close()
    return url_list

if __name__ == '__main__':
    create_tables()
    insert_fruits_data_into_tables()