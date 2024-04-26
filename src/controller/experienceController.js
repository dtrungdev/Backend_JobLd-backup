import experienceApiService from "../services/experienceApiService";

const FindExperience = async (req, res) => {
  try {
    let data = await experienceApiService.getAllExperience();
    return res.status(200).json({
      EM: data.EM, //error message
      EC: data.EC, //error code
      DT: data.DT, //data
    });
  } catch (error) {
    return res.status(500).json({
      EM: "error from server", //error message
      EC: "-1", //error code
      DT: "", //data
    });
  }
};

module.exports = {
  FindExperience,
};
