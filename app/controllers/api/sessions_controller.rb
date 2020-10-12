class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user.nil?
            render json: ['Invalid username or password'], status: 404
        else
            login!(@user)
            render :show
        end
    end

    def destroy
        if current_user
            logout!
            render json: {}
        else
            render json: ['cant log in'], status: 404
        end
    end
end
