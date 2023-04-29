class CustomersController < ApplicationController

    def index 
        customers = Customer.all 
        render json: customers
    end

    def show 
        customer = Customer.find(params[:id])
        render json: customer
    rescue ActiveRecord::RecordNotFound
        render json: "Customer not found", status: 404
    end

end
