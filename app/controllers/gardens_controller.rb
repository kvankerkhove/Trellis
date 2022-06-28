class GardensController < ApplicationController
    def index
        render json: Garden.all
    end

    def show
        render json: find_garden
    end

    def create
        garden = Garden.create!(garden_params)
        render json: garden, status: :created
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
        params.permit(:rows, :columns, :user_id)
    end
end
