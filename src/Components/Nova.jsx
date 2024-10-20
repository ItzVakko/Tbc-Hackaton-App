import "../styles/Nova.css";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import novaIcon from "../Assets/Images/nova-assistant.png";

const Nova = () => {
  const [message, setMessage] = useState("");
  const [showChat, setShowChat] = useState(true); 
  const chatContainerRef = useRef(null);
  const navigate = useNavigate();

  const paymentHistory = [
    { date: "2024-10-01", category: "Groceries", amount: 150 },
    { date: "2024-10-05", category: "Entertainment", amount: 100 },
    { date: "2024-10-10", category: "Utilities", amount: 80 },
    { date: "2024-10-15", category: "Rent", amount: 1000 },
    { date: "2024-10-18", category: "Shopping", amount: 200 },
  ];

  const monthlyIncome = 150000;

  const totalSpent = paymentHistory.reduce((acc, curr) => acc + curr.amount, 0);

  const percentageSpent = (totalSpent / monthlyIncome) * 100;

  const spentAdviceBank = {
    90: [
      "თქვენ ხარჯავთ თქვენი შემოსავლის 80%-ზე მეტს. გამკაცრეთ თქვენი ბიუჯეტი ფინანსური სტრესის თავიდან ასაცილებლად.",
      "თქვენი შემოსავლის 80%-ზე მეტის დახარჯვამ შეიძლება გამოიწვიოს ზედმეტი ხარჯვა. ფოკუსირება მოახდინეთ არასაჭირო ნივთების შემცირებაზე დაზოგვის გასაუმჯობესებლად.",
    ],
    80: [
      "თქვენ ხარჯავთ თქვენი შემოსავლის 80%-ზე მეტს. გამკაცრეთ თქვენი ბიუჯეტი ფინანსური სტრესის თავიდან ასაცილებლად.",
      "თქვენი შემოსავლის 80%-ზე მეტის დახარჯვამ შეიძლება გამოიწვიოს ზედმეტი ხარჯვა. ფოკუსირება მოახდინეთ არასაჭირო ნივთების შემცირებაზე დაზოგვის გასაუმჯობესებლად.",
    ],
    70: [
      "თქვენ ხარჯავთ თქვენი შემოსავლის 70%-ზე მეტს. შეამცირეთ არაარსებითი ხარჯები თქვენი დანაზოგის გასაზრდელად.",
      "დახარჯული 70%-ზე მეტის შემთხვევაში, შეიძლება გინდოდეთ გადახედოთ ისეთ სფეროებს, სადაც შეგიძლიათ შეამციროთ, როგორიცაა სასადილო ან გართობა",
    ],
    60: [
      "თქვენი შემოსავლის 60%-ზე მეტის დახარჯვამ შესაძლოა მცირე ადგილი დატოვოს დაზოგვისთვის. იფიქრეთ თქვენი ბიუჯეტის კორექტირებაზე.",
      "თქვენ ხარჯავთ თქვენი შემოსავლის 60%-ზე მეტს. კარგი დროა თქვენი უფრო დიდი ხარჯების ხელახლა შეფასებისთვის.",
    ],
    50: [
      "თქვენ ხარჯავთ თქვენი შემოსავლის 50%-ს, რაც კარგია, მაგრამ შეეცადეთ მეტი დახარჯოთ დანაზოგისთვის, თუ ეს შესაძლებელია.",
      "კარგად ხარ, მაგრამ მიზნად ისახავს შეამცირო ხარჯები 50%-ზე ქვემოთ, რათა გააძლიერო შენი ფინანსური ჯანმრთელობა.",
    ],
    40: [
      "50%-ზე ნაკლების დახარჯვა კარგი ბალანსია! ახლა ყურადღება გაამახვილეთ იმაზე, რომ დარწმუნდეთ, რომ თქვენი დანაზოგი იზრდება.",
      "დახარჯული 40%-ით, თქვენ კარგ მდგომარეობაში ხართ. იფიქრეთ დანარჩენის გრძელვადიან დაზოგვაზე.",
    ],
    30: [
      "40%-ზე ნაკლების დახარჯვა შესანიშნავია! განაგრძეთ და მაქსიმალურად გაზარდეთ თქვენი დაზოგვის პოტენციალი.",
      "შესანიშნავი სამუშაოა! თქვენ გონივრულად ხარჯავთ. ახლა არის შესანიშნავი დრო თქვენი დანაზოგის ან ინვესტიციის გაზრდისთვის.",
    ],
    20: [
      "30%-ზე ნაკლების დახარჯვა ფანტასტიკურია! თქვენ გაქვთ შესანიშნავი ფინანსური დისციპლინა. იფიქრეთ ახალი ინვესტიციების შესწავლაზე.",
      "შთამბეჭდავია! თქვენ ხარჯავთ თქვენი შემოსავლის 30%-ზე ნაკლებს. ეს შესანიშნავი შესაძლებლობაა დაზოგოთ და გაიზარდოთ თქვენი სიმდიდრე.",
    ],
    10: [
      "თქვენი შემოსავლის 20%-ზე ნაკლების დახარჯვა ფენომენალურია! თქვენ გაქვთ საკმარისი ადგილი ინვესტირებისთვის და ფინანსურად განვითარებისთვის.",
      "შესანიშნავი სამუშაოა! თქვენ ხარჯავთ ძალიან ცოტას. გამოიყენეთ ეს დამატებითი შემოსავალი გონივრულად, რათა უფრო სწრაფად მიაღწიოთ თქვენს ფინანსურ მიზნებს.",
    ],
  };
  const savingsAdviceBank = {
    90: [
      "თქვენ დახარჯეთ თქვენი შემოსავლის 90%-ზე მეტი! მნიშვნელოვანია თქვენი ხარჯების შეფასება და დაუყოვნებლივ შემცირება.",
      "თქვენი შემოსავლის 90%-ზე მეტის დახარჯვა საგანგაშოა. იფიქრეთ არასასურველი შესყიდვების შეჩერებაზე და გადააფასეთ თქვენი ბიუჯეტი.",
      "განიხილეთ გამოუყენებელი ნივთების გაყიდვა, რათა დაგეხმაროთ გარკვეული ხარჯების აღდგენაში.",
      "გადახედეთ თქვენს გამოწერებს და გააუქმეთ ნებისმიერი, რაც არასაჭიროა.",
      "ადევნეთ თვალყური თქვენს ყოველდღიურ ხარჯებს, რათა დაადგინოთ ზედმეტი ხარჯვის ნიმუშები.",
      "მოძებნეთ უფასო გასართობი ვარიანტები ხარჯების შესამცირებლად.",
      "მიიღეთ ფინანსური რჩევები, რათა უკეთ მართოთ თქვენი ბიუჯეტი.",
      "მოერიდეთ იმპულსურ შესყიდვებს ყიდვამდე ლოდინის პერიოდის განხორციელებით.",
      "განიხილეთ გვერდითი სამუშაოს შესრულება თქვენი შემოსავლის გასაზრდელად.",
    ],
    80: [
      "თქვენ ხარჯავთ თქვენი შემოსავლის 80%-ზე მეტს. გამკაცრეთ თქვენი ბიუჯეტი ფინანსური სტრესის თავიდან ასაცილებლად.",
      "თქვენი შემოსავლის 80%-ზე მეტის დახარჯვამ შეიძლება გამოიწვიოს ზედმეტი ხარჯვა. ფოკუსირება მოახდინეთ არასაჭირო ნივთების შემცირებაზე დაზოგვის გასაუმჯობესებლად.",
      "გადახედეთ თქვენს კომუნალურ გადასახადებს და იფიქრეთ პროვაიდერების შეცვლაზე უკეთესი ტარიფებისთვის.",
      "დააყენეთ ყოველთვიური ლიმიტი დისკრეციული ხარჯებისთვის.",
      "დაადგინეთ თქვენი ყველაზე დიდი ხარჯები და იპოვნეთ მათი შემცირების გზები.",
      "დაფიქრდით სახლში სადილის ნაცვლად სახლში საჭმლის მომზადებაზე.",
      "შეზღუდეთ იმპულსური შესყიდვები ყიდვამდე ლოდინის პერიოდის შექმნით.",
      "იძიეთ მხარდაჭერა მეგობრებისგან ან ოჯახისგან, რომ იყოთ ანგარიშვალდებული.",
      "შეაფასეთ თქვენი ტრანსპორტირების ხარჯები და განიხილეთ ალტერნატივები, როგორიცაა საზოგადოებრივი ტრანსპორტი.",
      "მოძებნეთ ფასდაკლებები და კუპონები თქვენი რეგულარული ხარჯების შესამცირებლად.",
    ],
    70: [
      "თქვენ ხარჯავთ თქვენი შემოსავლის 70%-ზე მეტს. შეამცირეთ არაარსებითი ხარჯები თქვენი დანაზოგის გასაზრდელად.",
      "გამოიყენეთ ბიუჯეტის აპი, რათა თვალყური ადევნოთ თქვენს ხარჯვის ჩვევებს.",
      "განიხილეთ სააბონენტო სერვისების გაზიარება ოჯახთან ან მეგობრებთან.",
      "გამოიკვლიეთ თქვენი შემოსავლის გაზრდის გზები, როგორიცაა თავისუფალი სამუშაო.",
      "გაფრთხილდით გაყიდვებზე და ფასდაკლებებზე, მაგრამ მოერიდეთ არასაჭირო შესყიდვებს.",
      "განიხილეთ დასახული დაზოგვის კონკრეტული მიზნები საკუთარი თავის მოტივაციისთვის.",
      "შეზღუდეთ საყიდლებზე მოგზაურობები იმპულსური შესყიდვების თავიდან ასაცილებლად.",
      "ადევნეთ თვალი თქვენი ხარჯების კატეგორიებს, რომ ნახოთ, სად შეგიძლიათ შეამციროთ.",
      "ისარგებლეთ ლოიალობის პროგრამებით ჯილდოს მოსაპოვებლად.",
    ],
    60: [
      "თქვენი შემოსავლის 60%-ზე მეტის დახარჯვამ შესაძლოა მცირე ადგილი დატოვოს დაზოგვისთვის. იფიქრეთ თქვენი ბიუჯეტის კორექტირებაზე.",
      "თქვენ ხარჯავთ თქვენი შემოსავლის 60%-ზე მეტს. კარგი დროა თქვენი უფრო დიდი ხარჯების ხელახლა შეფასებისთვის.",
      "დაფიქრდით საჭმლის მომზადებაზე, რათა დაზოგოთ ფული სასურსათო პროდუქტებზე.",
      "შეაჩერე ძვირადღირებული ჩვევები, როგორიცაა მოწევა ან ყავის გადაჭარბებული შეძენა.",
      "შექმენით ფინანსური გეგმა მკაფიო მიზნების დასასახად.",
      "შეზღუდეთ ჭამა გარეთ და ფოკუსირდით სახლში მომზადებულ კერძებზე.",
      "გააანალიზეთ თქვენი საბანკო ამონაწერები არასაჭირო გადასახადებისთვის.",
      "მოძებნეთ გზები ფიქსირებული ხარჯების შესამცირებლად, როგორიცაა დაზღვევა.",
      "ფრთხილად იყავით ახალი ვალის აღებასთან დაკავშირებით.",
    ],
    50: [
      "თქვენ ხარჯავთ თქვენი შემოსავლის 50%-ს, რაც კარგია, მაგრამ შეეცადეთ მეტი დახარჯოთ დანაზოგისთვის, თუ ეს შესაძლებელია.",
      "50%-იანი ხარჯვის მაჩვენებელი მართვადია; განიხილეთ სახსრების გამოყოფა საგანგებო სიტუაციებისთვის.",
      "გადახედეთ თქვენს დისკრეციულ ხარჯებს და იპოვნეთ სფეროები, რომელთა შემცირება შეგიძლიათ.",
      "დაგეგმეთ დროთა განმავლობაში თანდათან გაზარდოთ თქვენი დაზოგვის მაჩვენებელი.",
      "გამოიყენეთ ბიუჯეტის ინსტრუმენტები თქვენი ხარჯების მონიტორინგისთვის.",
      "პრიორიტეტულად დაისახეთ ძირითადი ხარჯები და მინიმუმამდე დაიყვანოთ ფუფუნების საგნები.",
      "აკონტროლეთ თქვენი ხარჯვის ჩვევები, რათა დაადგინოთ არასაჭირო ხარჯები.",
      "განიხილეთ თქვენი შემოსავლის გაზრდა გვერდითი კონცერტების საშუალებით.",
      "დაადგინეთ რეგულარული დანაზოგების გეგმა ფინანსური უსაფრთხოების ასაშენებლად.",
    ],
    40: [
      "50%-ზე ნაკლების დახარჯვა კარგი ბალანსია! ახლა ყურადღება გაამახვილეთ იმაზე, რომ დარწმუნდეთ, რომ თქვენი დანაზოგი იზრდება.",
      "დახარჯული 40%-ით, თქვენ კარგ მდგომარეობაში ხართ. იფიქრეთ დანარჩენის გრძელვადიან დაზოგვაზე.",
      "შეაფასეთ თქვენი ფინანსური მიზნები და შეცვალეთ თქვენი ბიუჯეტი შესაბამისად.",
      "განიხილეთ თქვენი დანაზოგის ინვესტიცია მომავალი ზრდისთვის.",
      "მოძებნეთ შემოსავლის დამატებითი წყაროები დანაზოგების გასაზრდელად.",
      "ფოკუსირება გადაუდებელი ფონდის შექმნაზე მოულოდნელი ხარჯებისთვის.",
      "განაგრძეთ თქვენი ხარჯების მონიტორინგი ამ ბალანსის შესანარჩუნებლად.",
      "ისარგებლეთ შემნახველი ანგარიშებით უფრო მაღალი საპროცენტო განაკვეთებით.",
      "შექმენით ფინანსური საგზაო რუკა, რათა წარმართოთ თქვენი მომავალი ხარჯები და დაზოგვა.",
      "იყავი პროაქტიული ფინანსური განათლების რესურსების მოძიებაში.",
    ],
    30: [
      "40%-ზე ნაკლების დახარჯვა შესანიშნავია! განაგრძეთ და მაქსიმალურად გაზარდეთ თქვენი დაზოგვის პოტენციალი.",
      "შესანიშნავი სამუშაოა! თქვენ გონივრულად ხარჯავთ. ახლა არის შესანიშნავი დრო თქვენი დანაზოგის ან ინვესტიციის გაზრდისთვის.",
      "გადახედეთ თქვენი ინვესტიციის ვარიანტებს თქვენი სიმდიდრის გასაზრდელად.",
      "განაგრძეთ თქვენი ხარჯების თვალყურის დევნება ამ ჯანსაღი ხარჯვის მაჩვენებლის შესანარჩუნებლად.",
      "განიხილეთ თქვენი შემოსავლის პროცენტის გამოყოფა საქველმოქმედო შემოწირულობებისთვის.",
      "გამოიკვლიეთ პასიური შემოსავლის შესაძლებლობები ინვესტიციების საშუალებით.",
      "იყავით მოწესრიგებული ხარჯებისას, რათა თავიდან აიცილოთ ცხოვრების წესის ინფლაცია.",
      "დაგეგმეთ უფრო დიდი შესყიდვები, რათა თავიდან აიცილოთ იმპულსური შესყიდვები.",
      "განიხილეთ ფინანსური კონსულტაცია გრძელვადიანი სტრატეგიებისთვის.",
      "შეაგროვეთ ფინანსური ჟურნალი, რათა თვალყური ადევნოთ თქვენს პროგრესს და მიზნებს.",
    ],
    20: [
      "30%-ზე ნაკლების დახარჯვა ფანტასტიკურია! თქვენ გაქვთ შესანიშნავი ფინანსური დისციპლინა. იფიქრეთ ახალი ინვესტიციების შესწავლაზე.",
      "შთამბეჭდავია! თქვენ ხარჯავთ თქვენი შემოსავლის 30%-ზე ნაკლებს. ეს შესანიშნავი შესაძლებლობაა დაზოგოთ და გაიზარდოთ თქვენი სიმდიდრე.",
      "განიხილეთ აგრესიული დაზოგვის მიზნების დასახვა საკუთარი თავის გამოწვევის მიზნით.",
      "დაამოწმეთ იაფი ინვესტიციის ვარიანტები თქვენი პორტფელის დივერსიფიკაციისთვის.",
      "მაქსიმალურად გაზარდეთ დამსაქმებლის შეღავათები, როგორიცაა საპენსიო გეგმები ან ჯანმრთელობის შემნახველი ანგარიშები.",
      "განაგრძეთ თქვენი დანაზოგების და სამომავლო ინვესტიციების პრიორიტეტი.",
      "რეგულარულად აკონტროლეთ თქვენი ფინანსური პროგრესი, რათა დარჩეთ გზაზე.",
      "გაითვალისწინეთ ცხოვრების სტილის ცვლილებები, რამაც შეიძლება გაზარდოს ხარჯები.",
      "განიხილეთ ფინანსური განათლების კურსების გავლა თქვენი ცოდნის გასაუმჯობესებლად.",
      "დარჩით თქვენი ფინანსური გეგმის ერთგული მუდმივი წარმატებისთვის.",
    ],
    10: [
      "თქვენი შემოსავლის 20%-ზე ნაკლების დახარჯვა ფენომენალურია! თქვენ გაქვთ საკმარისი ადგილი ინვესტირებისთვის და ფინანსურად განვითარებისთვის.",
      "შესანიშნავი სამუშაოა! თქვენ ხარჯავთ ძალიან ცოტას. გამოიყენეთ ეს დამატებითი შემოსავალი გონივრულად, რათა უფრო სწრაფად მიაღწიოთ თქვენს ფინანსურ მიზნებს.",
      "განიხილეთ ინვესტიცია აქციებში ან ურთიერთდახმარების ფონდებში გრძელვადიანი ზრდისთვის.",
      "გამოიკვლიეთ საგადასახადო ეფექტიანი საინვესტიციო ანგარიშები მაქსიმალური შემოსავლის მისაღებად.",
      "იყავით ინფორმირებული ფინანსური ტენდენციების შესახებ, რათა მიიღოთ განათლებული გადაწყვეტილებები.",
      "განაგრძეთ აგრესიულად დაზოგვა დროთა განმავლობაში სიმდიდრის შესაქმნელად.",
      "იყავით მოთმინება თქვენს ინვესტიციებთან მიმართებაში; ფოკუსირდით გრძელვადიან ჰორიზონტზე.",
      "მოძებნეთ გზები თქვენი დანაზოგისა და ინვესტიციების ავტომატიზაციისთვის.",
      "გაუზიარეთ თქვენი ფინანსური ცოდნა სხვებს ცნობიერების ამაღლების მიზნით.",
      "განიხილეთ ანდერძის ან ქონების გეგმის შექმნა თქვენი აქტივების დასაცავად.",
    ],
  };

  // Randomly select advice
  const getRandomAdvice = (adviceArray) => {
    return adviceArray[Math.floor(Math.random() * adviceArray.length)];
  };

  //Advice generation functions
  const generateSpentAdvice = () => {
    let advice = "";

    if (percentageSpent > 90) advice = getRandomAdvice(spentAdviceBank[90]);
    else if (percentageSpent > 80)
      advice = getRandomAdvice(spentAdviceBank[80]);
    else if (percentageSpent > 70)
      advice = getRandomAdvice(spentAdviceBank[70]);
    else if (percentageSpent > 60)
      advice = getRandomAdvice(spentAdviceBank[60]);
    else if (percentageSpent > 50)
      advice = getRandomAdvice(spentAdviceBank[50]);
    else if (percentageSpent > 40)
      advice = getRandomAdvice(spentAdviceBank[40]);
    else if (percentageSpent > 30)
      advice = getRandomAdvice(spentAdviceBank[30]);
    else if (percentageSpent > 20)
      advice = getRandomAdvice(spentAdviceBank[20]);
    else advice = getRandomAdvice(spentAdviceBank[10]);

    setMessage(advice);
  };

  const generateSavingsAdvice = () => {
    const savedPercentage =
      ((monthlyIncome - totalSpent) / monthlyIncome) * 100;

    let advice = "";

    if (savedPercentage >= 90) advice = getRandomAdvice(savingsAdviceBank[90]);
    else if (savedPercentage >= 80)
      advice = getRandomAdvice(savingsAdviceBank[80]);
    else if (savedPercentage >= 70)
      advice = getRandomAdvice(savingsAdviceBank[70]);
    else if (savedPercentage >= 60)
      advice = getRandomAdvice(savingsAdviceBank[60]);
    else if (savedPercentage >= 50)
      advice = getRandomAdvice(savingsAdviceBank[50]);
    else if (savedPercentage >= 40)
      advice = getRandomAdvice(savingsAdviceBank[40]);
    else if (savedPercentage >= 30)
      advice = getRandomAdvice(savingsAdviceBank[30]);
    else if (savedPercentage >= 20)
      advice = getRandomAdvice(savingsAdviceBank[20]);
    else advice = getRandomAdvice(savingsAdviceBank[10]);

    setMessage(advice);
  };

  const caringQuestions = [
    "დეივ რემსი: თქვენ უნდა მოიპოვოთ კონტროლი თქვენს ფულზე, წინააღმდეგ შემთხვევაში მისი ნაკლებობა სამუდამოდ გააკონტროლებს თქვენ. დაიწყე დღესვე. შეადგინე გეგმა. აიღე პასუხისმგებლობა.",

    "რობერტ კიოსაკი: მნიშვნელოვანია არა რამდენ ფულს გამოიმუშავებ, არამედ ის, თუ რამდენ ფულს ინახავ, რამდენად შრომობს შენთვის და რამდენ თაობაში ინახავ მას.",

    "უორენ ბაფეტი: ნუ დაზოგავ იმას, რაც დაგვრჩა ხარჯვის შემდეგ, არამედ დახარჯე ის, რაც დარჩენის შემდეგ რჩება. ამ მარტივ პრინციპს შეუძლია შეცვალოს თქვენი ფინანსური მომავალ.",

    "ტონი რობინსი: ჩვენი კომუნიკაცია სხვებთან და საკუთარ თავთან საბოლოოდ განსაზღვრავს ჩვენი ცხოვრების ხარისხს. მიიღეთ ფინანსური გადაწყვეტილებები სიცხადით და თავდაჯერებულობით.",

    "სუზე ორმანი: ერთადერთი, რაც დგას შენსა და შენს ოცნებებს შორის, არის შენი მზადყოფნა იმუშაო მათთვის. იზრუნე შენს ფინანსებზე და წარმატება მოჰყვება“.",

    "ჯიმ რონი: ფორმალური განათლება მოგცემთ საარსებო წყაროს; თვითგანათლება მოგცემთ სიმდიდრეს. ინვესტიცია ჩადეთ თქვენს ფინანსურ განათლებაში.",
    "ზიგ ზიგლარი: არ უნდა იყოთ შესანიშნავი, რომ დაიწყოთ, მაგრამ უნდა დაიწყოთ, რომ იყოთ შესანიშნავი. გადადგით პირველი ნაბიჯი ფინანსური დამოუკიდებლობისკენ დღეს“.",

    "კრის გარდნერი: არასოდეს მისცე ვინმეს უფლება გითხრას, რომ რაღაცის გაკეთება არ შეგიძლია. მე კი არა. თუ ოცნება გაქვს, დაიცავი იგი. იმუშავე ამისთვის და არასოდეს დანებდე.“",

    "ბარბარა კორკორანი: არ გაბედო საკუთარი ინსტინქტის ძალის შეუფასებლობა. ენდეთ საკუთარ თავს, რომ მიიღოთ სწორი ფინანსური გადაწყვეტილებები.",

    "ნაპოლეონ ჰილი: რისი ჩაფიქრება და სჯერა გონებას, მას შეუძლია მიაღწიოს. დაისახეთ თქვენი ფინანსური მიზნები, გჯეროდეთ საკუთარი თავის და იმოქმედეთ.“",

    "თ. ჰარვ ეკერი: თქვენი ფინანსური გეგმა არის თქვენი რწმენის, თქვენი ემოციების და თქვენი ქმედებების ერთობლიობა. შეცვალეთ თქვენი გეგმა და შეგიძლიათ შეცვალოთ თქვენი ფინანსური მომავალი.",

    "რამიტ სეტი: თქვენ არ უნდა იყოთ გატაცებული ფულით. თქვენ უბრალოდ უნდა გესმოდეთ, როგორ მართოთ ის ეფექტურად. შექმენით სისტემა, რომელიც მუშაობს თქვენთვის.",

    "გრანტი კარდონი: თქვენი სიდიადე შემოიფარგლება მხოლოდ იმ ინვესტიციებით, რომელსაც თქვენ აკეთებთ საკუთარ თავში. ფინანსურ საკითხებში უწყვეტი სწავლისა და პიროვნული განვითარების ვალდებულება.“",

    "მელინდა ემერსონი: თქვენ ვერ მართავთ იმას, რასაც არ გაზომავთ. თვალყური ადევნეთ თქვენს ფინანსებს და უყურეთ თქვენი სიმდიდრის ზრდას.",

    "პიტერ დრაკერი: რაც იზომება, იმართება. თვალყური ადევნეთ თქვენს შემოსავალს და ხარჯებს, რათა გააკონტროლოთ თქვენი ფინანსური მდგომარეობა.",

    "ქეთი კრისტოფი: იყავი პროაქტიული შენი ფინანსების მიმართ. გახადეთ ფინანსური დაგეგმვა თქვენი რუტინის ნაწილად და ეს გრძელვადიან პერსპექტივაში გამოგივათ“.",

    "ჯიმ კრამერი: ყველაზე მნიშვნელოვანი, რაც უნდა გვახსოვდეს, არის ის, რომ ვერ დაკარგავ ფულს, თუ არ ჩადებ ინვესტიციას. მაგრამ თქვენ ასევე ვერ გაზრდით სიმდიდრეს, თუ არ მიიღებთ გათვლილ რისკებს.“",

    "ბარბარა სტენი: ფული ინსტრუმენტია. ის წაგიყვანთ სადაც გინდათ, მაგრამ არ ჩაგანაცვლებთ როგორც მძღოლს. აკონტროლეთ თქვენი ფინანსური ბედი.“",

    "დეივ რემსი: სიმდიდრე არ არის ინტელექტის საკითხი; ეს დისციპლინის საკითხია. მიიღეთ ვალდებულება იცხოვროთ თქვენს შესაძლებლობებზე დაბალი, დაზოგოთ და ინვესტიციები განახორციელოთ მომავლისთვის.“",
  ];

  const askHowWasYourDay = () => {
    const randomQuestion =
      caringQuestions[Math.floor(Math.random() * caringQuestions.length)];
    setMessage(randomQuestion);
  };

  return (
    <div className="financial-ai-container">
      {showChat && (
        <div className="chatbot-container" ref={chatContainerRef}>
          <div className="nova">
            <img src={novaIcon} alt="Nova Icon" className="nova-icon" />
            <h2>
              გამარჯობა მე ნოვა ვარ! შენ ფინანსურ საკითხებთან დაკავშირებით მე
              გამოგითვლი ყველაფერს და რჩევას მოგცემ!
            </h2>
          </div>

          <div className="answers">
            <button onClick={generateSpentAdvice} className="advice-button">
              რჩევა ხარჯვის შესახებ
            </button>
            <button onClick={generateSavingsAdvice} className="advice-button">
              რჩევა დაზოგვის შესახებ
            </button>
            <button onClick={askHowWasYourDay} className="advice-button">
              სამოტივაციო თქმულება
            </button>
          </div>

          <div className="nova1">
            <img src={novaIcon} alt="Nova Icon" className="nova-icon" />
            <h2>{message}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nova;
