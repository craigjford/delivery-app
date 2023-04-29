class CustomersController < ApplicationController

    def index 
        customers = Customer.all 
        render json: customers
    end

    def show 
        delivery = Delivery.find(params[:id])
        render json: delivery
    rescue ActiveRecord::RecordNotFound
        render json: "Delivery not found", status: 404
    end

end
