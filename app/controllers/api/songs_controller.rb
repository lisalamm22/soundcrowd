class Api::SongsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]

    def index
        artist = User.find_by(params[:song][:artist_id])
        @songs = Song.by_artist(artist)
        render :index
    end
    
    def create
        @song = Song.new(song_params)
        if @song.save
            render :show
        else
            render json: @song.errors.full_messages, status:401
        end
    end

    def show
        @song = Song.find(params[:id])
        render :show
    end

    def update
        @song = Song.find(params[:id])
        if @song.update(song_params)
            render :show 
        else
            render json: @song.errors.full_messages, status: 422
        end
    end

    def destroy
        @song = Song.find(params[:id])
        @song.destroy 
        render json: {}
    end

    private
    def song_params
        params.require(:song).permit(:title, :artist_id, :genre, :description)
    end
end
