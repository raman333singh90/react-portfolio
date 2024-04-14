const fs = require("node:fs/promises");

const { v4: generateId } = require("uuid");

const { NotFoundError } = require("../util/errors");

async function readData() {
  const data = await fs.readFile("profile.json", "utf8");
  return JSON.parse(data);
}

async function writeData(data) {
  await fs.writeFile("profile.json", JSON.stringify(data));
}

async function getDetail() {
  const storedData = await readData();
  if (!storedData.profile || storedData.profile.length === 0) {
    throw new NotFoundError("Could not find Profile.");
  }

  const profile = storedData.profile;
  if (!profile) {
    throw new NotFoundError("Could not find Profile ");
  }

  return profile;
}

async function setDetail(data) {
  const storedData = await readData();
  if (!storedData.profile || storedData.profile.length === 0) {
    throw new NotFoundError("Could not find profile.");
  }

  storedData.profile = { ...data };

  await writeData(storedData);
}

async function patchDetail(key, data) {
  const storedData = await readData();
  if (!storedData.profile || storedData.profile.length === 0) {
    throw new NotFoundError("Could not find profile.");
  }

  storedData.profile.key = data;

  await writeData(storedData);
}

exports.getDetail = getDetail;
exports.setDetail = setDetail;
exports.patchDetail = patchDetail;
