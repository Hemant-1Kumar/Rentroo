import {v2 as cloudinary} from "cloudinary"
import Agency from "../models/Agency.js"
import  Car from "../models/Car.js"
import { messageInRaw } from "svix";

export const addNewCar = async (req, res) => {
  try {
    const {
      title,
      description,
      city,
      country,
      address,
      odometer,
      bodyType,
      priceRent,
      priceSale,
      transmission,
      seats,
      fuelType,
      features,
    } = req.body;


    const agency = await Agency.findOne({
        owner: req.user._id,
    });


    if (!agency) {
      return res.json({
        success: false,
        message: "Agency not found",
      });
    }

        const uploadImages = req.files.map(async (file) => {
            try {
                const response = await cloudinary.uploader.upload(file.path, {
                resource_type: "image",
                
                });

                return response.secure_url;
            } catch (err) {
                console.log("CLOUDINARY ERROR:", err);
                throw err;
            }
            });

        const images = await Promise.all(uploadImages)
        await Car.create({
            agency:agency._id,
            title,
            description,
            city,
            country,
            address,
            odometer,
            bodyType,
            price:{
                rent:priceRent? + priceRent:null,
                sale:priceSale ? + priceSale:null,
            },
            specs:{
                transmission,
                seats : +seats,
                fuelType,
            },
            features: JSON.parse(features),
            images,
        });
        res.json({success:true, message:"Car Added"})
    }catch (error){
        console.log("ADD CAR ERROR:", error);
        res.json({success:false, message: error.message})
    }
};


export const getAllAvailableCars=async(req,res)=>{
    try{
        const cars=await Car.find({isAvailable:true}).populate({
            path:"agency",
            populate:{
                path:"owner",
                select:"image email",
            },
        }) 

        res.json({success:true,cars})
    }catch(error){
        res.json({success:false,message:error.message})
    }
}


export const getOwnerCars = async (req, res) => {
  try {

    const agencyData = await Agency.findOne({
      owner: req.user._id,
    });

    if (!agencyData) {
      return res.json({
        success: false,
        message: "Agency not found",
      });
    }

    const cars = await Car.find({
      agency: agencyData._id,
    }).populate("agency");

    res.json({
      success: true,
      cars,
    });
  } catch (error) {
    console.log("GET OWNER CARS ERROR:", error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export const toggleCarAvailability=async (req,res)=>{
    try{
        const {carId}=req.body
        const carData=await Car.findById(carId)
        carData.isAvailable=!carData.isAvailable
        await carData.save()
        
        res.json({success:true, message:"Status Updated"})
    }catch (error){
        res.json({success:false,message:error.message})
    }
}