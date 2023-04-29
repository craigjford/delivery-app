# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Customer.create!(name: "John Mengucci", address: "1412 Springvale Rd", city: "Rumson", state: "NJ", phone: "732.842.1089", hanger: "Y", starch: "None")
Customer.create!(name: "Al Colquitt", address: "12 Buena Vista Rd", city: "Fair Haven", state: "NJ", phone: "732.747.7535", hanger: "Y", starch: "Medium")
Customer.create!(name: "Tom Och", address: "84 Waterman Ave", city: "Rumson", state: "NJ", phone: "732.741.3489", hanger: "N", starch: "Light")
Customer.create!(name: "John Moos", address: "14 Spring St", city: "Red Bank", state: "NJ", phone: "732.742.1057", hanger: "Y", starch: "Heavy")