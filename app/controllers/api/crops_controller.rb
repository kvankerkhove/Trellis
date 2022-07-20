class Api::CropsController < ApplicationController
    def index
        render json: Crop.alphabetized
    end

    def show
        render json: find_crop
    end

    def create
        crop = Crop.create!(crop_params)
        render json: crop
    end

    private

    def find_crop
        Crop.find(params[:id])
    end

    def crop_params
        params.permit(:name, :family, :plants_per_sq_ft, :days_to_maturity, :projected_yield, :yield_unit, :watering_needs, :details, :image)
    end
end

