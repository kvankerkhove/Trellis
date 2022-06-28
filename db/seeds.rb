# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts 'Seeding data...'
carrot = Crop.create({
    name: "Carrot",
    family: "Umbel",
    plants_per_sq_ft: 30,
    days_to_maturity: 54,
    watering_needs: 'Deeply water every 3 days, allowing roots to stretch to reach water',
    details: 'Sow from early spring to midsummer, 3/4–1" apart, 1/4– 1/2" deep, in a 2"-wide band (about 30 seeds/ft.) Sprinkle the soil surface to keep moist. Do not allow soil to crust before the emergence of seedlings, which takes 1–3 weeks, depending on temperature and moisture. If necessary, thin young seedlings to 3/4–2" apart, depending on root size desired. Keep weed-free by tine weeding and shallow hoeing.'
})

escarole = Crop.create({
    name: "Escarole",
    family: "Aster",
    plants_per_sq_ft: 4,
    days_to_maturity: 50,
    watering_needs: 'Overhead water enough to keep soil moist, especially during the summer. Refrain from overhead watering a few days before harvest after rubber banding to avoid rot while blanching',
    details: 'Sow seeds 6 seeds per foot, rows 12-18" apart. Cover seed lightly, about 1/8", and firm soil gently. Dry soil must be watered to ensure coolness and moisture, and for uniform germination. Thin the seedlings 8" apart as soon as they are large enough to handle.'
})

katey = User.create({
    first_name: 'Katey',
    last_name: 'Van',
    plant_hardiness_zone: '5b',
    username: 'kvan',
    password: '12345',
    password_confirmation: '12345'
})

danny = User.create({
    first_name: 'Danny',
    last_name: 'Morals',
    plant_hardiness_zone: '7a',
    username: 'dmorals',
    password: '12345',
    password_confirmation: '12345'
})

katey_garden = Garden.create({
    rows: 10,
    columns: 10,
    user_id: katey.id
})

GardenSquare.create({
    square_number: 11,
    garden_id: katey_garden.id,
    crop_id: carrot.id
})

GardenSquare.create({
    square_number: 13,
    garden_id: katey_garden.id,
    crop_id: carrot.id
})

GardenSquare.create({
    square_number: 14,
    garden_id: katey_garden.id,
    crop_id: escarole.id
})

puts 'Seeded 🌱'
