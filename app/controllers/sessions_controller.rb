class SessionsController < ApplicationController
    before_action :is_authorized?, except: [:create]
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:current_user] = user.id
            render json: user, status: :ok
        else
            render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end

    def assign
        garden = Garden.find(params[:id])
        session[:current_garden] = garden.id
        render json: garden, status: :ok
    end

    def destroy
        session.delete :current_user
        session.delete :current_garden
        head :no_content
    end

    def remove
        session.delete :current_garden
        head :no_content
    end
end
