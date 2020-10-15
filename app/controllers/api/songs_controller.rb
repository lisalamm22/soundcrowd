class Api::SongsController < ApplicationController
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
