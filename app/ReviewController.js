import Review from "./Review.js";

const write = async (req, res) => {
  const reviewData = {
    location: req.body.location,
    text: req.body.text,
    heart: req.body.heart,
  };
  console.log(req);
  const newReview = await Review.create(reviewData);
  res.send("후기 작성을 완료했습니다.");
};

const Seoul = async (req, res) => {
  const seoulData = await Review.find({ location: "서울" });
  res.json(seoulData);
};

const KangWon = async (req, res) => {
  const kangwonData = await Review.find({ location: "강원도" });
  res.json(kangwonData);
};

const Jeonla = async (req, res) => {
  const jeonlaData = await Review.find({ location: "전라도" });
  res.json(jeonlaData);
};

const Jeju = async (req, res) => {
  const jejuData = await Review.find({ location: "제주도" });
  res.json(jejuData);
};

const GyeongSang = async (req, res) => {
  const gyeongsangData = await Review.find({ location: "경상도" });
  res.json(gyeongsangData);
};

const GyeongGi = async (req, res) => {
  const gyeongiData = await Review.find({ location: "경기도" });
  res.json(gyeongiData);
};

const ChungCheong = async (req, res) => {
  const chungcheongData = await Review.find({ location: "충청도" });
  res.json(chungcheongData);
};

export {
  write,
  Seoul,
  KangWon,
  Jeonla,
  Jeju,
  GyeongSang,
  GyeongGi,
  ChungCheong,
};
