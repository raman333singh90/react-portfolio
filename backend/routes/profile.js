const express = require("express");

const { getDetail, setDetail, patchDetail } = require("../data/profile");
const {
  isValidText,
  isValidDate,
  isValidImageUrl,
} = require("../util/validation");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const profile = await getDetail();
    res.json({ profile: profile });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const data = req.body;

  let errors = {};

  if (!isValidText(data.aboutText)) {
    errors.aboutText = "Invalid About Text.";
  }

  //   if (!isValidText(data.description)) {
  //     errors.description = "Invalid description.";
  //   }

  //   if (!isValidDate(data.date)) {
  //     errors.date = "Invalid date.";
  //   }

  //   if (!isValidImageUrl(data.image)) {
  //     errors.image = "Invalid image.";
  //   }

  //   if (Object.keys(errors).length > 0) {
  //     return res.status(422).json({
  //       message: "Adding the event failed due to validation errors.",
  //       errors,
  //     });
  //   }

  try {
    await setDetail(data);
    res.status(201).json({ message: "Profile saved.", data: data });
  } catch (error) {
    next(error);
  }
});

router.patch("/:key", async (req, res, next) => {
  const data = req.body;

  let errors = {};

  //   if (!isValidText(data.title)) {
  //     errors.title = "Invalid title.";
  //   }

  //   if (!isValidText(data.description)) {
  //     errors.description = "Invalid description.";
  //   }

  //   if (!isValidDate(data.date)) {
  //     errors.date = "Invalid date.";
  //   }

  //   if (!isValidImageUrl(data.image)) {
  //     errors.image = "Invalid image.";
  //   }

  //   if (Object.keys(errors).length > 0) {
  //     return res.status(422).json({
  //       message: "Updating the event failed due to validation errors.",
  //       errors,
  //     });
  //   }

  try {
    await patchDetail(req.params.key, data);
    res.json({ message: "Profile updated.", data: data });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
