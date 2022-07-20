class Api::GardenSquaresController < ApplicationController
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
        render json: find_garden_square, status: :ok
    end

    def destroy
        find_garden_square.destroy!
        render json: {}
    end

    def all_squares
        garden_squares = GardenSquare.sort_by_garden(params[:id])
        render json: garden_squares
    end

    def create_squares
        garden_square = GardenSquare.create!(garden_square_params)
        render json: garden_square, status: :created
    end

    def garden_data
        garden_squares = GardenSquare.sort_and_remove_fallow_squares(params[:id])
        updated_squares = garden_squares.map do |square|
            square.crop
        end
        render json: updated_squares

    end

    private

    def find_garden_square
        GardenSquare.find(params[:id])
    end

    def garden_square_params
        params.permit(:square_number, :start_date, :garden_id, :crop_id)
    end


end
