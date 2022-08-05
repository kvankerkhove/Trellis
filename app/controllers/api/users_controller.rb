class Api::UsersController < ApplicationController
    def index
        render json: User.all
    end

    def show
        # debugger
        # puts "User ID:#{session[:current_user]}"
        render json: current_user
    end

    def create
        user = User.create!(user_params)
        ##User.new
        ##User.save
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
