import { Favourite } from '../models';

const favourites= async (req, res) => {

    try {
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
        
    }
}