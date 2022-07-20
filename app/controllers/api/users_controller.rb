class Api::UsersController < ApplicationController
    def index
        render json: User.all
    end

    def show
        current_user = User.find(session[:current_user])
        # puts "User ID:#{session[:current_user]}"
        render json: current_user
    end

    def create
        user = User.create!(user_params)
        if user.valid?
            session[:current_user] = user.id
            render json: user, status: 201
        else
            render json: { error: ["Invalid user"] }, status: 422
        end
    end

    private

    def find_user
        User.find(params[:id])
    end

    def user_params
        params.permit(:first_name, :last_name, :plant_hardiness_zone, :username, :password, :password_confirmation)
    end
end
