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

userfile1 = open('https://soundcrowd-seed.s3-us-west-1.amazonaws.com/demo_profile_pic')
demo.profile_pic.attach(io: userfile1, filename: "img_#{demo.id}.jpg")

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

songImg1 = open('https://soundcrowd-seed.s3-us-west-1.amazonaws.com/1.png')
song1.imageURL.attach(io: songImg1, filename: "song#{song1.id}_img.png")
songAud1 = open('https://soundcrowd-seed.s3-us-west-1.amazonaws.com/1.+Ed+Sheeran+-+I+See+Fire+(Kygo+Remix)+(1).mp3')
song1.audioURL.attach(io: songAud1, filename: "song#{song1.id}_aud.mp3")

# songImg2 = open('https://soundcrowd-seed.s3-us-west-1.amazonaws.com/2.png')
# song2.imageURL.attach(io: songImg2, filename: "song#{song2.id}_img.png")
# songAud2 = open('https://soundcrowd-seed.s3-us-west-1.amazonaws.com/2.+Syn+Cole+-+Miami+82+(Kygo+Remix).mp3')
# song2.audioURL.attach(io: songAud2, filename: "song#{song2.id}_aud.mp3")

songImg3 = open('https://soundcrowd-seed.s3-us-west-1.amazonaws.com/3.png')
song3.imageURL.attach(io: songImg3, filename: "song#{song3.id}_img.png")
songAud3 = open("https://soundcrowd-seed.s3-us-west-1.amazonaws.com/3.+Jakubi+-+Can't+Afford+It+All+(Kygo+Remix).mp3")
song3.audioURL.attach(io: songAud3, filename: "song#{song3.id}_aud.mp3")

songImg4 = open('https://soundcrowd-seed.s3-us-west-1.amazonaws.com/4.png')
song4.imageURL.attach(io: songImg4, filename: "song#{song4.id}_img.png")
songAud4 = open('https://soundcrowd-seed.s3-us-west-1.amazonaws.com/4.+Oh+Wonder+-+Shark+(Illenium+Remix).mp3')
song4.audioURL.attach(io: songAud4, filename: "song#{song4.id}_aud.png")

songImg5 = open('https://soundcrowd-seed.s3-us-west-1.amazonaws.com/5.png')
song5.imageURL.attach(io: songImg5, filename: "song#{song5.id}_img.png")
songAud5 = open('https://soundcrowd-seed.s3-us-west-1.amazonaws.com/5.+aKu+-+The+Final+Blow.mp3')
song5.audioURL.attach(io: songAud5, filename: "song#{song5.id}_aud.png")

songImg6 = open('https://soundcrowd-seed.s3-us-west-1.amazonaws.com/6.png')
song6.imageURL.attach(io: songImg6, filename: "song#{song6.id}_img.png")
songAud6 = open('https://soundcrowd-seed.s3-us-west-1.amazonaws.com/6.+Pretty+Girl.mp3')
song6.audioURL.attach(io: songAud6, filename: "song#{song6.id}_aud.mp3")

songImg7 = open('https://soundcrowd-seed.s3-us-west-1.amazonaws.com/7.png')
song7.imageURL.attach(io: songImg7, filename: "song#{song7.id}_img.png")
songAud7 = open('https://soundcrowd-seed.s3-us-west-1.amazonaws.com/7.+Nightlight.mp3')
song7.audioURL.attach(io: songAud7, filename: "song#{song7.id}_aud.mp3")

songImg8 = open('https://soundcrowd-seed.s3-us-west-1.amazonaws.com/8.png')
song8.imageURL.attach(io: songImg8, filename: "song#{song8.id}_img.png")
songAud8 = open('https://soundcrowd-seed.s3-us-west-1.amazonaws.com/8.+Major+Lazer+ft.+Wild+Belle+-+Be+Together+(BKAYE+Remix).mp3')
song8.audioURL.attach(io: songAud8, filename: "song#{song8.id}_aud.mp3")

songImg9 = open('https://soundcrowd-seed.s3-us-west-1.amazonaws.com/9.png')
song9.imageURL.attach(io: songImg9, filename: "song#{song9.id}_img.png")
songAud9 = open('https://soundcrowd-seed.s3-us-west-1.amazonaws.com/9.+Montgomery+-+Pinata+(Japanese+Wallpaper+Remix).mp3')
song9.audioURL.attach(io: songAud9, filename: "song#{song9.id}_aud.mp3")

songImg10 = open('https://soundcrowd-seed.s3-us-west-1.amazonaws.com/10.png')
song10.imageURL.attach(io: songImg10, filename: "song#{song10.id}_img.png")
songAud10 = open('https://soundcrowd-seed.s3-us-west-1.amazonaws.com/10.+Zara+Larsson+-+Aint+My+Fault+(R3hab+Remix).mp3')
song10.audioURL.attach(io: songAud10, filename: "song#{song10.id}_aud.mp3")
