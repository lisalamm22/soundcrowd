# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Song.destroy_all

demo = User.create!(username: 'demo', email: 'demo@user.edu', password: 'demouser')
hello = User.create!(username: 'hello', email: 'hello@hi.com', password: '123456')

file1 = open('https://soundcrowd-seed.s3-us-west-1.amazonaws.com/demo_profile_pic')
demo.profile_pic.attach(io: file1, filename: "img_#{demo.id}.jpg")

song1 = Song.create!(title: 'I See Fire (Kygo Remix)', artist_id: demo.id, genre: 'Tropical House', description: 'Fire 🔥🔥🔥')
song2 = Song.create!(title: 'Miami 82 (Kygo Remix)', artist_id: demo.id, genre: 'Tropical House', description: 'Sunshine on my mind')
song3 = Song.create!(title: 'Can’t Afford It All (Kygo Remix)', artist_id: demo.id, genre: 'Tropical House', description: 'Born to shop. Forced to work')
song4 = Song.create!(title: 'Shark (Illenium Remix)', artist_id: demo.id, genre: 'Chill', description: 'Shark week every week')
song5 = Song.create!(title: 'The Final Blow', artist_id: demo.id, genre: 'Instrumental', description: 'Cherry blossom dreaming')
song6 = Song.create!(title: 'Pretty Girl', artist_id: hello.id, genre: 'Pop', description: 'Perfect imperfection')
song7 = Song.create!(title: 'Nightlight', artist_id: hello.id, genre: 'Pop', description: 'The night is darkest before the dawn')
song8 = Song.create!(title: 'Be Together (BKAYE Remix)', artist_id: hello.id, genre: 'EDM', description: 'Sunny rays and festival days')
song9 = Song.create!(title: 'Piñata (Japanese Wallpaper Remix)', artist_id: hello.id, genre: 'Chill', description: 'Happy birthday to the ground')
song10 = Song.create!(title: 'Ain’t My Fault (R3HAB Remix)', artist_id: hello.id, genre: 'EDM', description: 'I know guac is extra but so am I')