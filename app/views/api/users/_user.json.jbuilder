json.extract! user, :id, :username
if user.profile_pic.attached?
    json.photoURL url_for(user.profile_pic)
else
    json.photoUrl ''
end