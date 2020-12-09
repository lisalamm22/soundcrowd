class User < ApplicationRecord
    attr_reader :password

    validates :username, :email, presence: true, uniqueness: true
    validates :password_digest, :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create, message: 'Invalid email format' }

    after_initialize :ensure_session_token

    has_one_attached :profile_pic

    has_many :songs,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: 'Song'

    has_many :comments,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: 'Comment'

    has_many :likes,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: 'Like'

        
    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password) 
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token 
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end
end
