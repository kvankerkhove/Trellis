class GardenSquaresController < ApplicationController
    def index
        render json: GardenSquare.all
    end

    def show
        render json: find_garden_square
    end

    def create
        garden_square = GardenSquare.create!(garden_square_params)
        render json: garden_square, status: :created
    end

    def update
        garden_square = find_garden_square.update!(garden_square_params)
        render json: garden_square, status: :ok
    end

    def destroy
        find_garden_square.destroy!
        render json: {}
    end

    private

    def find_garden_square
        GardenSquare.find(params[:id])
    end

    def garden_square_params
        params.permit(:square_number, :garden_id, :crop_id)
    end

end
