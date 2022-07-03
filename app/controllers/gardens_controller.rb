class GardensController < ApplicationController
    def index
        render json: Garden.all
    end

    # def show
    #     render json: find_garden
    # end

    # def create
    #     garden = Garden.create!(garden_params)
    #     render json: garden, status: :created
    # end

    def show
        current_garden = Garden.find(session[:current_garden])
        # puts "User ID:#{session[:current_user]}"
        render json: current_garden
    end

    def create
        garden = Garden.create!(garden_params)
        if garden.valid?
            session[:current_garden] = garden.id
            render json: garden, status: 201
        else
            render json: { error: ["Invalid garden"] }, status: 422
        end
    end

    def destroy
        find_garden.destroy!
        render json: {}
    end

    private

    def find_garden
        Garden.find(params[:id])
    end

    def garden_params
        params.permit(:name, :rows, :columns, :user_id)
    end
end
