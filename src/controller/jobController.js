import jobApiService from "../services/jobApiService";

const CreateFn = (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      EM: "error from server", //error message
      EC: "-1", //error code
      DT: "", //data
    });
  }
};

const ReadFn = async (req, res) => {
  try {
    ////check page, limit exist
    if (req.query.page && req.query.limit) {
      let page = req.query.page;
      let limit = req.query.limit;
      let data = await jobApiService.getJob(+page, +limit);
      return res.status(200).json({
        EM: data.EM, //error message
        EC: data.EC, //error code
        DT: data.DT, //data
      });
    } else {
      return res.status(200).json({
        EM: data.EM, //error message
        EC: data.EC, //error code
        DT: data.DT, //data
      });
    }
  } catch (error) {
    return res.status(500).json({
      EM: "error from server", //error message
      EC: "-1", //error code
      DT: "", //data
    });
  }
};

const UpdateFn = (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      EM: "error from server", //error message
      EC: "-1", //error code
      DT: "", //data
    });
  }
};

const DeleteFn = (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      EM: "error from server", //error message
      EC: "-1", //error code
      DT: "", //data
    });
  }
};

const FindJob = async (req, res) => {
  try {
    console.log(req.body);
    if (req.query.page && req.query.limit) {
      let page = req.query.page;
      let limit = req.query.limit;
      let title = req.body.title;

      let data = await jobApiService.getJob(+page, +limit, title);
      return res.status(200).json({
        EM: data.EM, //error message
        EC: data.EC, //error code
        DT: data.DT, //data
      });
    } else {
      return res.status(200).json({
        EM: data.EM, //error message
        EC: data.EC, //error code
        DT: data.DT, //data
      });
    }
  } catch (error) {
    return res.status(500).json({
      EM: "error from server", //error message
      EC: "-1", //error code
      DT: "", //data
    });
  }
};

const FindJobInProvince = async (req, res, rawData) => {
  try {
    console.log(req.body);
    if (req.query.page && req.query.limit) {
      let page = req.query.page;
      let limit = req.query.limit;
      let rawData = req.body;
      let data = await jobApiService.getJobInProvince(+page, +limit, rawData);
      return res.status(200).json({
        EM: data.EM, //error message
        EC: data.EC, //error code
        DT: data.DT, //data
      });
    } else {
      return res.status(200).json({
        EM: data.EM, //error message
        EC: data.EC, //error code
        DT: data.DT, //data
      });
    }
  } catch (error) {
    return res.status(500).json({
      EM: "error from server", //error message
      EC: "-1", //error code
      DT: "", //data
    });
  }
};

const FindJobWithPosition = async (req, res) => {
  try {
    console.log(req.body);
    if (req.query.page && req.query.limit) {
      let page = req.query.page;
      let limit = req.query.limit;
      let rawData = req.body;
      let data = await jobApiService.getJobWithPosition(+page, +limit, rawData);
      return res.status(200).json({
        EM: data.EM, //error message
        EC: data.EC, //error code
        DT: data.DT, //data
      });
    } else {
      return res.status(200).json({
        EM: data.EM, //error message
        EC: data.EC, //error code
        DT: data.DT, //data
      });
    }
  } catch (error) {
    return res.status(500).json({
      EM: "error from server", //error message
      EC: "-1", //error code
      DT: "", //data
    });
  }
};

const FindJobWithPositionInProvince = async (req, res) => {};

const FindJobPosition = async (req, res) => {
  try {
    let data = await jobApiService.getJobPosition();
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
  CreateFn,
  ReadFn,
  UpdateFn,
  DeleteFn,
  FindJob,
  FindJobInProvince,
  FindJobWithPosition,
  FindJobWithPositionInProvince,
  FindJobPosition,
};
