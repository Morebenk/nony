import type { Quiz } from "$lib/types/quiz";

export const extractedQuiz: Quiz = {
  id: "quiz-1",
  title: "Geography Quiz",
  description: "Test your knowledge of world capitals",
  category_id: "geography",
  is_active: true,
  is_free: true,
  created_at: new Date().toISOString(),
  questions: [
    {
      id: "q1",
      content:
        "A patient with hypertension is on multiple medications and is experiencing increased salivation leading to a gag reflex. Which medication is most likely responsible for this side effect?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Digoxin, a cardiac glycoside used to treat heart conditions, can cause increased salivation as a side effect, which may lead to a gag reflex. ACE inhibitors, beta-blockers, and calcium channel blockers, while used in the treatment of hypertension, do not typically cause increased salivation.",
      choices: [
        {
          id: "c1",
          content: "Angiotensin-converting enzyme (ACE) inhibitors",
          explanation: "Incorrect.",
          question_id: "q1",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Digoxin",
          explanation: "Correct!",
          question_id: "q1",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Beta-blockers",
          explanation: "Incorrect.",
          question_id: "q1",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Calcium channel blockers",
          explanation: "Incorrect.",
          question_id: "q1",
          is_correct: false,
        },
      ],
    },
    {
      id: "q2",
      content:
        "Given a radiograph of a dental implant with an impression coping, what would be the next step in the procedure, considering the angulation of the implant?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "The next step in the procedure after viewing a radiograph of a dental implant with an impression coping depends on the angulation of the implant. If the implant is angulated, an impression is taken with an open tray. If the implant is parallel, an impression is taken with a closed tray. The other two options are incorrect as the type of tray used for taking an impression is determined by the angulation of the implant.",
      choices: [
        {
          id: "c1",
          content:
            "Taking an impression with an open tray if the implant is angulated",
          explanation: "Correct!",
          question_id: "q2",
          is_correct: true,
        },
        {
          id: "c2",
          content:
            "Taking an impression with a closed tray if the implant is parallel",
          explanation: "Incorrect.",
          question_id: "q2",
          is_correct: false,
        },
        {
          id: "c3",
          content:
            "Taking an impression with a closed tray regardless of the implant's angulation",
          explanation: "Incorrect.",
          question_id: "q2",
          is_correct: false,
        },
        {
          id: "c4",
          content:
            "Taking an impression with an open tray regardless of the implant's angulation",
          explanation: "Incorrect.",
          question_id: "q2",
          is_correct: false,
        },
      ],
    },
    {
      id: "q3",
      content:
        "How should a tooth with an amalgam restoration, which is needed for a preclinical study, be stored?",
      category_id: "geography",
      image_url: "",
      explanation:
        "A tooth with an amalgam restoration that is needed for a preclinical study should be stored in 10% formalin for 2 weeks. Formalin is a commonly used fixative that helps to preserve the structure of the tooth and the restoration. The other options, such as distilled water, 70% alcohol, and saline solution, are not appropriate for this purpose as they do not have the same preservative properties.",
      choices: [
        {
          id: "c1",
          content: "In 10% formalin for 2 weeks",
          explanation: "Correct!",
          question_id: "q3",
          is_correct: true,
        },
        {
          id: "c2",
          content: "In distilled water for 2 weeks",
          explanation: "Incorrect.",
          question_id: "q3",
          is_correct: false,
        },
        {
          id: "c3",
          content: "In 70% alcohol for 2 weeks",
          explanation: "Incorrect.",
          question_id: "q3",
          is_correct: false,
        },
        {
          id: "c4",
          content: "In saline solution for 2 weeks",
          explanation: "Incorrect.",
          question_id: "q3",
          is_correct: false,
        },
      ],
    },
    {
      id: "q6",
      content:
        "Where should the contact area be placed when restoring a large class IV cavity in a central incisor?",
      category_id: "geography",
      image_url: "",
      explanation:
        "When restoring a large class IV cavity in a central incisor, the contact area should be placed more incisally than the original contact area. This is because the incisal edge is often involved in class IV cavities, and the restoration needs to rebuild this area while maintaining proper contact with the adjacent teeth.",
      choices: [
        {
          id: "c1",
          content: "More incisally than the original contact area",
          explanation: "Correct!",
          question_id: "q6",
          is_correct: true,
        },
        {
          id: "c2",
          content: "More gingivally than the original contact area",
          explanation: "Incorrect.",
          question_id: "q6",
          is_correct: false,
        },
        {
          id: "c3",
          content: "In the same position as the original contact area",
          explanation: "Incorrect.",
          question_id: "q6",
          is_correct: false,
        },
        {
          id: "c4",
          content: "More distally than the original contact area",
          explanation: "Incorrect.",
          question_id: "q6",
          is_correct: false,
        },
      ],
    },
    {
      id: "q7",
      content: "What is a common dental manifestation of Bulimia nervosa?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Bulimia nervosa, an eating disorder characterized by episodes of binge eating followed by compensatory behaviors such as vomiting, can lead to various dental complications. One of the most common dental manifestations of bulimia nervosa is tooth erosion, particularly on the palatal and lingual surfaces of the teeth. This is due to the frequent exposure of these surfaces to stomach acid during episodes of self-induced vomiting.",
      choices: [
        {
          id: "c1",
          content:
            "Erosion appears more frequently on the buccal surfaces of the teeth",
          explanation: "Incorrect.",
          question_id: "q7",
          is_correct: false,
        },
        {
          id: "c2",
          content:
            "Erosion appears more frequently on the palatal and lingual surfaces of the teeth",
          explanation: "Correct!",
          question_id: "q7",
          is_correct: true,
        },
        {
          id: "c3",
          content:
            "Erosion appears more frequently on the occlusal surfaces of the teeth",
          explanation: "Incorrect.",
          question_id: "q7",
          is_correct: false,
        },
        {
          id: "c4",
          content:
            "Erosion appears more frequently on the incisal edges of the teeth",
          explanation: "Incorrect.",
          question_id: "q7",
          is_correct: false,
        },
      ],
    },
    {
      id: "q8",
      content:
        "A patient who has undergone a renal transplant presents with inflammation in the floor of the tongue and severe pain while eating. What would be the most appropriate clinical approach in this scenario?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In this scenario, the patient is likely suffering from oral lesions related to their immunosuppressive state following a renal transplant. Administering intralesional steroids can help to reduce inflammation and alleviate pain. While a biopsy may be necessary in some cases to confirm a diagnosis, it is not the first line of treatment. Antibiotics would not be effective unless there is a bacterial infection present, and recommending a soft diet may help to alleviate pain but does not address the underlying issue.",
      choices: [
        {
          id: "c1",
          content: "Perform a biopsy",
          explanation: "Incorrect.",
          question_id: "q8",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Administer intralesional steroids",
          explanation: "Correct!",
          question_id: "q8",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Prescribe antibiotics",
          explanation: "Incorrect.",
          question_id: "q8",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Recommend a soft diet",
          explanation: "Incorrect.",
          question_id: "q8",
          is_correct: false,
        },
      ],
    },
    {
      id: "q12",
      content:
        "During the insertion of a dental crown, if a patient feels as though there are seeds stuck between their teeth, what could this indicate?",
      category_id: "geography",
      image_url: "",
      explanation:
        "If a patient feels as though there are seeds stuck between their teeth during the insertion of a dental crown, this could indicate a tight contact. This means that the crown may be too close to the adjacent teeth, causing discomfort. The other options, such as an improperly fitted crown, an allergic reaction to the crown material, or an infection in the surrounding gum tissue, would likely present with different symptoms.",
      choices: [
        {
          id: "c1",
          content: "A tight contact",
          explanation: "Correct!",
          question_id: "q12",
          is_correct: true,
        },
        {
          id: "c2",
          content: "An improperly fitted crown",
          explanation: "Incorrect.",
          question_id: "q12",
          is_correct: false,
        },
        {
          id: "c3",
          content: "An allergic reaction to the crown material",
          explanation: "Incorrect.",
          question_id: "q12",
          is_correct: false,
        },
        {
          id: "c4",
          content: "An infection in the surrounding gum tissue",
          explanation: "Incorrect.",
          question_id: "q12",
          is_correct: false,
        },
      ],
    },
    {
      id: "q18",
      content:
        "Which area is more likely to have a straight mesio-incline insertion?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The upper posterior region is more likely to have a straight mesio-incline insertion. This is due to the anatomical structure and orientation of the teeth in this region. The mesio-incline insertion refers to the angle at which the tooth is inserted into the jawbone, which can vary depending on the specific tooth and its location in the mouth.",
      choices: [
        {
          id: "c1",
          content: "Upper posterior region",
          explanation: "Correct!",
          question_id: "q18",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Lower anterior region",
          explanation: "Incorrect.",
          question_id: "q18",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Upper anterior region",
          explanation: "Incorrect.",
          question_id: "q18",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Lower posterior region",
          explanation: "Incorrect.",
          question_id: "q18",
          is_correct: false,
        },
      ],
    },
    {
      id: "q19",
      content:
        "What is the approximate success rate of a single dental implant with a crown?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The success rate of a single dental implant with a crown is approximately 95%. This high success rate is due to advancements in dental technology and techniques. However, the success rate can vary depending on the patient's oral health, the skill of the dentist, and the quality of the implant and crown.",
      choices: [
        {
          id: "c1",
          content: "49%",
          explanation: "Incorrect.",
          question_id: "q19",
          is_correct: false,
        },
        {
          id: "c2",
          content: "75%",
          explanation: "Incorrect.",
          question_id: "q19",
          is_correct: false,
        },
        {
          id: "c3",
          content: "85%",
          explanation: "Incorrect.",
          question_id: "q19",
          is_correct: false,
        },
        {
          id: "c4",
          content: "95%",
          explanation: "Correct!",
          question_id: "q19",
          is_correct: true,
        },
      ],
    },
    {
      id: "q23",
      content:
        "Which hypertension medication, when administered to a patient, can lead to hypersalivation and subsequently induce a gag reflex in a clinical setting?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Digoxin (Lanoxin) is a medication used to treat various heart conditions, including hypertension. One of its side effects is hypersalivation, which can induce a gag reflex in a clinical setting. The other choices, Losartan (Cozaar), Metoprolol (Lopressor), and Lisinopril (Prinivil), are also hypertension medications but they do not typically cause hypersalivation.",
      choices: [
        {
          id: "c1",
          content: "Digoxin (Lanoxin)",
          explanation: "Correct!",
          question_id: "q23",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Losartan (Cozaar)",
          explanation: "Incorrect.",
          question_id: "q23",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Metoprolol (Lopressor)",
          explanation: "Incorrect.",
          question_id: "q23",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Lisinopril (Prinivil)",
          explanation: "Incorrect.",
          question_id: "q23",
          is_correct: false,
        },
      ],
    },
    {
      id: "q27",
      content:
        "What are the clinical features of Pierre Robin Syndrome and Hehcet?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Pierre Robin Syndrome is characterized by a triad of clinical features: micrognathia (small lower jaw), glossoptosis (downward displacement or retraction of the tongue), and cleft palate. The term 'Hehcet' does not seem to be related to any known medical or dental condition and may be a typographical error.",
      choices: [
        {
          id: "c1",
          content: "Severe retrognathia, glossoptosis and cleft lip",
          explanation: "Incorrect.",
          question_id: "q27",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Micrognathia, glossoptosis and cleft palate",
          explanation: "Correct!",
          question_id: "q27",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Macroglossia, glossoptosis and cleft lip",
          explanation: "Incorrect.",
          question_id: "q27",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Micrognathia, glossoptosis and cleft lip",
          explanation: "Incorrect.",
          question_id: "q27",
          is_correct: false,
        },
      ],
    },
    {
      id: "q32",
      content:
        "What is the appropriate type and duration of splinting for a lateral luxation dental injury?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In the case of a lateral luxation dental injury, the appropriate treatment is non-rigid splinting for a duration of 4 weeks. Rigid splinting is not recommended as it can inhibit the necessary physiological tooth movement and may lead to ankylosis. The duration of 4 weeks is suggested to allow for adequate healing of the periodontal ligament.",
      choices: [
        {
          id: "c1",
          content: "Non-rigid splinting for 4 weeks",
          explanation: "Correct!",
          question_id: "q32",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Rigid splinting for 2 weeks",
          explanation: "Incorrect.",
          question_id: "q32",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Non-rigid splinting for 2 weeks",
          explanation: "Incorrect.",
          question_id: "q32",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Rigid splinting for 4 weeks",
          explanation: "Incorrect.",
          question_id: "q32",
          is_correct: false,
        },
      ],
    },
    {
      id: "q34",
      content:
        "Which of the following techniques is commonly used for the recapping of a needle in a dental procedure as previously mentioned?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The scoop technique is a commonly used method for recapping needles in dental procedures. This technique involves using a one-handed 'scoop' motion to replace the cap on the needle, which is then secured by pressing against a hard surface. This method is recommended as it reduces the risk of needle stick injuries.",
      choices: [
        {
          id: "c1",
          content: "Scoop technique",
          explanation: "Correct!",
          question_id: "q34",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Loop technique",
          explanation: "Incorrect.",
          question_id: "q34",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Twist technique",
          explanation: "Incorrect.",
          question_id: "q34",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Flip technique",
          explanation: "Incorrect.",
          question_id: "q34",
          is_correct: false,
        },
      ],
    },
    {
      id: "q38",
      content:
        "What is the recommended course of action for a lesion located in the lower mandibular region, specifically under the Inferior Alveolar Nerve, with a size ranging from 0.5 to 0.6 mm?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In the case of a small lesion (0.5 to 0.6 mm) located under the Inferior Alveolar Nerve in the lower mandibular region, the recommended course of action is to schedule a follow-up appointment to monitor the lesion. Immediate biopsy or surgery may not be necessary unless the lesion shows signs of rapid growth or other alarming symptoms. Antibiotics are not typically prescribed unless there is an infection present.",
      choices: [
        {
          id: "c1",
          content: "Perform a biopsy immediately",
          explanation: "Incorrect.",
          question_id: "q38",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Schedule a follow-up appointment to monitor the lesion",
          explanation: "Correct!",
          question_id: "q38",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Prescribe antibiotics and reassess after a week",
          explanation: "Incorrect.",
          question_id: "q38",
          is_correct: false,
        },
        {
          id: "c4",
          content:
            "Refer the patient to a maxillofacial surgeon for immediate surgery",
          explanation: "Incorrect.",
          question_id: "q38",
          is_correct: false,
        },
      ],
    },
    {
      id: "q39",
      content:
        "How should a dentist manage a patient who, after the application of a temporary crown, presents with inflammation and bleeding due to a rough margin on the temporary crown during the final impression?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In a situation where a patient presents with inflammation and bleeding due to a rough margin on a temporary crown, the best course of action is to replace the temporary crown with a new one that has a smooth margin. This will help to reduce the inflammation and bleeding. The final impression should then be taken after two weeks, once the tissues have had time to heal. The other options are not appropriate as they do not address the cause of the problem (the rough margin on the temporary crown) and could potentially cause further harm to the patient.",
      choices: [
        {
          id: "c1",
          content:
            "Apply a new temporary crown with a smooth surface of the margin and take the final impression after two weeks",
          explanation: "Correct!",
          question_id: "q39",
          is_correct: true,
        },
        {
          id: "c2",
          content:
            "Prescribe antibiotics and take the final impression immediately",
          explanation: "Incorrect.",
          question_id: "q39",
          is_correct: false,
        },
        {
          id: "c3",
          content:
            "Ignore the inflammation and proceed with the final impression",
          explanation: "Incorrect.",
          question_id: "q39",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Remove the temporary crown and proceed without it",
          explanation: "Incorrect.",
          question_id: "q39",
          is_correct: false,
        },
      ],
    },
    {
      id: "q40",
      content:
        "In a case where a patient has been using bisphosphonates and after tooth extraction, there is necrosis without inflammation and pain during follow-up, what would be the most appropriate management?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In the case of a patient using bisphosphonates and experiencing necrosis without inflammation and pain after tooth extraction, the most appropriate management would be to prescribe an antimicrobial mouthwash. This is considered as Stage 1 management for osteonecrosis of the jaw associated with bisphosphonate use. Antibiotics, surgical intervention, or discontinuation of bisphosphonates may not be necessary at this stage.",
      choices: [
        {
          id: "c1",
          content: "A. Prescribe an antimicrobial mouthwash (Stage 1)",
          explanation: "Correct!",
          question_id: "q40",
          is_correct: true,
        },
        {
          id: "c2",
          content: "B. Prescribe a course of antibiotics",
          explanation: "Incorrect.",
          question_id: "q40",
          is_correct: false,
        },
        {
          id: "c3",
          content: "C. Recommend immediate surgical intervention",
          explanation: "Incorrect.",
          question_id: "q40",
          is_correct: false,
        },
        {
          id: "c4",
          content:
            "D. Advise the patient to discontinue the use of bisphosphonates",
          explanation: "Incorrect.",
          question_id: "q40",
          is_correct: false,
        },
      ],
    },
    {
      id: "q41",
      content:
        "Which type of dental restoration is most commonly used in 7-year-old patients with a high risk of caries?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Glass Ionomer Cement (GIC) is often used in children with a high risk of caries due to its fluoride-releasing properties, which can help to prevent further tooth decay. It is also more biocompatible and less technique-sensitive than other materials, making it suitable for use in younger patients.",
      choices: [
        {
          id: "c1",
          content: "Glass Ionomer Cement (GIC)",
          explanation: "Correct!",
          question_id: "q41",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Amalgam",
          explanation: "Incorrect.",
          question_id: "q41",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Composite Resin",
          explanation: "Incorrect.",
          question_id: "q41",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Porcelain",
          explanation: "Incorrect.",
          question_id: "q41",
          is_correct: false,
        },
      ],
    },
    {
      id: "q42",
      content:
        "A radiograph displays a calibre persistent artery on the upper lip. What is the source of this artery?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "The superior labial artery, a branch of the facial artery, is the primary source of blood supply to the upper lip. It is often visible on radiographs as a calibre persistent artery. The other options, the inferior labial artery, facial artery, and transverse facial artery, are not the primary sources of blood supply to the upper lip.",
      choices: [
        {
          id: "c1",
          content: "Superior labial artery",
          explanation: "Correct!",
          question_id: "q42",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Inferior labial artery",
          explanation: "Incorrect.",
          question_id: "q42",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Facial artery",
          explanation: "Incorrect.",
          question_id: "q42",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Transverse facial artery",
          explanation: "Incorrect.",
          question_id: "q42",
          is_correct: false,
        },
      ],
    },
    {
      id: "q43",
      content:
        "What is the main component of Gutta-Percha used in endodontics?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Gutta-Percha is primarily composed of gutta-percha (approximately 20%), zinc oxide (approximately 70%), and other materials including metal sulfates. However, the main component is gutta-percha, not zinc oxide.",
      choices: [
        {
          id: "c1",
          content: "70% zinc oxide",
          explanation: "Incorrect.",
          question_id: "q43",
          is_correct: false,
        },
        {
          id: "c2",
          content: "80% gutta-percha",
          explanation: "Correct!",
          question_id: "q43",
          is_correct: true,
        },
        {
          id: "c3",
          content: "50% calcium hydroxide",
          explanation: "Incorrect.",
          question_id: "q43",
          is_correct: false,
        },
        {
          id: "c4",
          content: "60% barium sulfate",
          explanation: "Incorrect.",
          question_id: "q43",
          is_correct: false,
        },
      ],
    },
    {
      id: "q45",
      content:
        "Where is the Gow-Gates nerve block typically administered in relation to the condylar process of the mandible?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The Gow-Gates nerve block is typically administered lateral to the condylar process of the mandible. This technique is often used in dentistry to provide anesthesia to the lower jaw. The needle is inserted into the mouth and directed towards the neck of the condyle, passing lateral to it. The local anesthetic is then deposited near the mandibular nerve as it enters the mandibular foramen.",
      choices: [
        {
          id: "c1",
          content: "Anterior to the condylar process",
          explanation: "Incorrect.",
          question_id: "q45",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Lateral to the condylar process",
          explanation: "Correct!",
          question_id: "q45",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Medial to the condylar process",
          explanation: "Incorrect.",
          question_id: "q45",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Inferior to the condylar process",
          explanation: "Incorrect.",
          question_id: "q45",
          is_correct: false,
        },
      ],
    },
    {
      id: "q48",
      content:
        "What is the most common medication used for pocket reduction in periodontal disease treatment?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Doxycycline is commonly used in the treatment of periodontal disease due to its ability to inhibit collagenase, an enzyme that contributes to the destruction of the periodontal tissue. It is often used for pocket reduction in periodontal disease treatment. The other options, Amoxicillin, Metronidazole, and Ciprofloxacin, are antibiotics that can be used in the treatment of periodontal disease, but they are not typically used for pocket reduction.",
      choices: [
        {
          id: "c1",
          content: "Doxycycline",
          explanation: "Correct!",
          question_id: "q48",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Amoxicillin",
          explanation: "Incorrect.",
          question_id: "q48",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Metronidazole",
          explanation: "Incorrect.",
          question_id: "q48",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Ciprofloxacin",
          explanation: "Incorrect.",
          question_id: "q48",
          is_correct: false,
        },
      ],
    },
    {
      id: "q49",
      content:
        "Which instrument is commonly used in conjunction with intraoral fulcrums, specifically the finger-on-finger technique, as depicted in the image?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "Intraoral fulcrums, specifically the finger-on-finger technique, are often used in conjunction with a subgingival instrument b-curette. This instrument is designed for the removal of calculus from the tooth surface below the gum line. The other instruments listed, such as the periodontal probe, sickle scaler, and universal curette, are also used in periodontal procedures but are not typically associated with the finger-on-finger fulcrum technique.",
      choices: [
        {
          id: "c1",
          content: "Subgingival instrument b-curette",
          explanation: "Correct!",
          question_id: "q49",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Periodontal probe",
          explanation: "Incorrect.",
          question_id: "q49",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Sickle scaler",
          explanation: "Incorrect.",
          question_id: "q49",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Universal curette",
          explanation: "Incorrect.",
          question_id: "q49",
          is_correct: false,
        },
      ],
    },
    {
      id: "q50",
      content:
        "Which class of malocclusion is typically associated with conditions of cleft lip and palate due to the deficiency of maxillary growth?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Cleft lip and palate conditions often result in a deficiency of maxillary growth. This deficiency can lead to a Class III malocclusion, which is characterized by the lower jaw (mandible) protruding further forward than the upper jaw (maxilla). Therefore, individuals with cleft lip and palate conditions are more likely to develop a Class III malocclusion.",
      choices: [
        {
          id: "c1",
          content: "Class I malocclusion.",
          explanation: "Incorrect.",
          question_id: "q50",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Class II division 1 malocclusion.",
          explanation: "Incorrect.",
          question_id: "q50",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Class II division 2 malocclusion.",
          explanation: "Incorrect.",
          question_id: "q50",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Class III malocclusion.",
          explanation: "Correct!",
          question_id: "q50",
          is_correct: true,
        },
      ],
    },
    {
      id: "q51",
      content:
        "What is the recommended minimum space in millimeters between a tooth and an implant?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The recommended minimum space between a tooth and an implant is 1.5 mm. This space is necessary to maintain the health of the periodontal tissues and to allow for proper cleaning. A smaller space may lead to difficulties in oral hygiene and potential damage to the periodontal tissues, while a larger space may not provide sufficient support and stability for the implant.",
      choices: [
        {
          id: "c1",
          content: "1 mm",
          explanation: "Incorrect.",
          question_id: "q51",
          is_correct: false,
        },
        {
          id: "c2",
          content: "1.5 mm",
          explanation: "Correct!",
          question_id: "q51",
          is_correct: true,
        },
        {
          id: "c3",
          content: "2 mm",
          explanation: "Incorrect.",
          question_id: "q51",
          is_correct: false,
        },
        {
          id: "c4",
          content: "3 mm",
          explanation: "Incorrect.",
          question_id: "q51",
          is_correct: false,
        },
      ],
    },
    {
      id: "q52",
      content:
        "What is the recommended minimum distance in millimeters between two dental implants?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The recommended minimum distance between two dental implants is 3 mm. This is to ensure that there is enough space for the bone and soft tissue to remain healthy and to prevent biomechanical problems.",
      choices: [
        {
          id: "c1",
          content: "1.5 mm",
          explanation: "Incorrect.",
          question_id: "q52",
          is_correct: false,
        },
        {
          id: "c2",
          content: "3 mm",
          explanation: "Correct!",
          question_id: "q52",
          is_correct: true,
        },
        {
          id: "c3",
          content: "4 mm",
          explanation: "Incorrect.",
          question_id: "q52",
          is_correct: false,
        },
        {
          id: "c4",
          content: "5 mm",
          explanation: "Incorrect.",
          question_id: "q52",
          is_correct: false,
        },
      ],
    },
    {
      id: "q54",
      content:
        "Which type of fracture is most commonly observed in the mandible?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Condylar fractures are the most common type of mandibular fractures. They occur when there is a direct impact to the side of the face or chin. The condyle is the most protruding part of the mandible and is therefore more susceptible to fractures. Other types of mandibular fractures such as alveolar, coronoid, and angular fractures are less common.",
      choices: [
        {
          id: "c1",
          content: "Condylar fracture",
          explanation: "Correct!",
          question_id: "q54",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Alveolar fracture",
          explanation: "Incorrect.",
          question_id: "q54",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Coronoid fracture",
          explanation: "Incorrect.",
          question_id: "q54",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Angular fracture",
          explanation: "Incorrect.",
          question_id: "q54",
          is_correct: false,
        },
      ],
    },
    {
      id: "q55",
      content:
        "Which of the following is considered the safest analgesic for use during pregnancy?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Paracetamol (Acetaminophen) is generally considered the safest analgesic for use during pregnancy. It is a non-opioid analgesic and antipyretic (fever reducer). Other analgesics such as Ibuprofen and Aspirin are not recommended due to potential risks to the fetus.",
      choices: [
        {
          id: "c1",
          content: "Ibuprofen",
          explanation: "Incorrect.",
          question_id: "q55",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Aspirin",
          explanation: "Incorrect.",
          question_id: "q55",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Paracetamol (Acetaminophen)",
          explanation: "Correct!",
          question_id: "q55",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Codeine",
          explanation: "Incorrect.",
          question_id: "q55",
          is_correct: false,
        },
      ],
    },
    {
      id: "q56",
      content:
        "Which acid is used to etch the tooth surface in order to improve the bond of Glass Ionomer Cement (GIC)?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Polyacrylic acid 10% for 20 seconds is used to etch the tooth surface to improve the bond of Glass Ionomer Cement (GIC). Phosphoric acid is commonly used for etching enamel and dentin for composite restorations, not for GIC. Hydrofluoric acid is used to etch porcelain and glass-filled materials. Sulfuric acid is not used in dentistry for etching purposes.",
      choices: [
        {
          id: "c1",
          content: "Polyacrylic acid 10% for 20 seconds",
          explanation: "Correct!",
          question_id: "q56",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Phosphoric acid",
          explanation: "Incorrect.",
          question_id: "q56",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Hydrofluoric acid",
          explanation: "Incorrect.",
          question_id: "q56",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Sulfuric acid",
          explanation: "Incorrect.",
          question_id: "q56",
          is_correct: false,
        },
      ],
    },
    {
      id: "q57",
      content:
        "What is the approximate percentage of accessory canals found at the apical third of the root?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Accessory canals are additional canals that may be found in any part of the root. They are most commonly found at the apical third of the root. Approximately 74% of accessory canals are located at the apical third.",
      choices: [
        {
          id: "c1",
          content: "11%",
          explanation: "Incorrect.",
          question_id: "q57",
          is_correct: false,
        },
        {
          id: "c2",
          content: "15%",
          explanation: "Incorrect.",
          question_id: "q57",
          is_correct: false,
        },
        {
          id: "c3",
          content: "74%",
          explanation: "Correct!",
          question_id: "q57",
          is_correct: true,
        },
        {
          id: "c4",
          content: "50%",
          explanation: "Incorrect.",
          question_id: "q57",
          is_correct: false,
        },
      ],
    },
    {
      id: "q58",
      content:
        "What is the appropriate course of action when the lower third molar is in close proximity to the inferior alveolar canal?",
      category_id: "geography",
      image_url: "",
      explanation:
        "When the lower third molar is in close proximity to the inferior alveolar canal, it is recommended to refer the case to an Oral and Maxillofacial Surgeon. This is due to the risk of damaging the inferior alveolar nerve during extraction, which can lead to complications such as numbness or pain in the lower lip, chin, and teeth. An Oral and Maxillofacial Surgeon has specialized training to handle such complex cases.",
      choices: [
        {
          id: "c1",
          content: "Refer the case to an Oral and Maxillofacial Surgeon",
          explanation: "Correct!",
          question_id: "q58",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Perform the extraction yourself",
          explanation: "Incorrect.",
          question_id: "q58",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Prescribe antibiotics and monitor the situation",
          explanation: "Incorrect.",
          question_id: "q58",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Perform a root canal treatment",
          explanation: "Incorrect.",
          question_id: "q58",
          is_correct: false,
        },
      ],
    },
    {
      id: "q59",
      content:
        "What is the appropriate management strategy for an overfilling of calcium hydroxide as observed in a periapical radiograph?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "In the case of an overfilling of calcium hydroxide, if there are no signs and symptoms of infection or discomfort, the best course of action is to monitor the patient with regular follow-ups. Immediate surgical intervention, prescribing antibiotics and analgesics, or immediate endodontic retreatment are not necessary unless there are signs of infection or the patient is experiencing discomfort.",
      choices: [
        {
          id: "c1",
          content: "Immediate surgical intervention",
          explanation: "Incorrect.",
          question_id: "q59",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Prescribe antibiotics and analgesics",
          explanation: "Incorrect.",
          question_id: "q59",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Follow up if there are no signs and symptoms",
          explanation: "Correct!",
          question_id: "q59",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Immediate endodontic retreatment",
          explanation: "Incorrect.",
          question_id: "q59",
          is_correct: false,
        },
      ],
    },
    {
      id: "q65",
      content:
        "What is the appropriate course of action for a patient with an extruded gutta-percha filling who presents no signs or symptoms and experiences no pain on percussion?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In cases where a patient with an extruded gutta-percha filling presents no signs or symptoms and experiences no pain on percussion, the appropriate course of action is to follow up with regular check-ups. This is because the absence of symptoms indicates that the patient's body may be tolerating the extruded material well and there is no immediate need for invasive procedures. However, regular follow-ups are necessary to monitor the situation and ensure that no complications arise in the future.",
      choices: [
        {
          id: "c1",
          content: "Immediate extraction of the tooth",
          explanation: "Incorrect.",
          question_id: "q65",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Immediate root canal retreatment",
          explanation: "Incorrect.",
          question_id: "q65",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Prescribe antibiotics and painkillers",
          explanation: "Incorrect.",
          question_id: "q65",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Follow up with regular check-ups",
          explanation: "Correct!",
          question_id: "q65",
          is_correct: true,
        },
      ],
    },
    {
      id: "q66",
      content:
        "What type of allergic reaction is typically associated with the use of a rubber dam in dentistry?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Type I hypersensitivity reaction, also known as immediate hypersensitivity, is typically associated with the use of a rubber dam in dentistry. This type of reaction occurs rapidly, often within minutes of exposure to an allergen. Symptoms can range from mild (such as hives or itching) to severe (such as anaphylaxis). Type II, III, and IV hypersensitivity reactions are not typically associated with the use of a rubber dam.",
      choices: [
        {
          id: "c1",
          content: "Type I hypersensitivity reaction",
          explanation: "Correct!",
          question_id: "q66",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Type II hypersensitivity reaction",
          explanation: "Incorrect.",
          question_id: "q66",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Type III hypersensitivity reaction",
          explanation: "Incorrect.",
          question_id: "q66",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Type IV hypersensitivity reaction",
          explanation: "Incorrect.",
          question_id: "q66",
          is_correct: false,
        },
      ],
    },
    {
      id: "q67",
      content:
        "Given a case scenario where a patient's test results show a Mean Corpuscular Volume (MCV) of 90 fL, what type of anemia is most likely present?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Mean Corpuscular Volume (MCV) is a measure of the average volume of a red blood corpuscle (or red blood cell). An MCV of 90 fL falls within the normal range (80-100 fL), suggesting that the patient does not have microcytic or macrocytic anemia. However, it does not rule out normocytic anemia, such as that caused by iron deficiency. Therefore, the most likely type of anemia in this case is iron deficiency anemia. G6PD deficiency, pernicious anemia, and sickle cell anemia would typically present with other specific symptoms or test results.",
      choices: [
        {
          id: "c1",
          content: "Glucose-6-phosphate dehydrogenase deficiency (G6PD)",
          explanation: "Incorrect.",
          question_id: "q67",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Iron deficiency anemia",
          explanation: "Correct!",
          question_id: "q67",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Pernicious anemia",
          explanation: "Incorrect.",
          question_id: "q67",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Sickle cell anemia",
          explanation: "Incorrect.",
          question_id: "q67",
          is_correct: false,
        },
      ],
    },
    {
      id: "q68",
      content:
        "Which of the following is the most suitable medium for storing an avulsed tooth?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Hank's Balanced Salt Solution (HBSS) is considered the best medium for storing an avulsed tooth. It is a cell culture medium that maintains the viability and proliferative capacity of cells. It is superior to other options like distilled water, normal saline, and alcohol, which can cause cell damage or are not suitable for preserving the vitality of the periodontal ligament cells.",
      choices: [
        {
          id: "c1",
          content: "Distilled water",
          explanation: "Incorrect.",
          question_id: "q68",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Normal saline",
          explanation: "Incorrect.",
          question_id: "q68",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Hank's Balanced Salt Solution (HBSS)",
          explanation: "Correct!",
          question_id: "q68",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Alcohol",
          explanation: "Incorrect.",
          question_id: "q68",
          is_correct: false,
        },
      ],
    },
    {
      id: "q69",
      content:
        "A pediatric patient presents with multiple caries, poor oral hygiene, and has been experiencing pain for the past three days. The patient also has a fever and cough that has persisted for one week. What type of abuse might this situation suggest?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The presence of multiple caries and poor oral hygiene in a pediatric patient might suggest neglect, as these conditions often result from inadequate care and attention to the child's health and well-being. The persistence of pain, fever, and cough could also indicate that the child's health concerns are not being adequately addressed, further suggesting neglect.",
      choices: [
        {
          id: "c1",
          content: "Physical abuse",
          explanation: "Incorrect.",
          question_id: "q69",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Emotional abuse",
          explanation: "Incorrect.",
          question_id: "q69",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Neglect",
          explanation: "Correct!",
          question_id: "q69",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Sexual abuse",
          explanation: "Incorrect.",
          question_id: "q69",
          is_correct: false,
        },
      ],
    },
    {
      id: "q70",
      content:
        "A patient presents with a small ulcer, less than 2mm in size, on the labial mucosa. The patient reports that the ulcer has been recurring monthly for the past two years. What is the most likely diagnosis?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "The patient's symptoms are indicative of a minor aphthous ulcer, also known as a canker sore. These ulcers are small, less than 1 cm in diameter, and typically heal on their own within one to two weeks. They can recur frequently and are often triggered by stress, hormonal changes, or certain foods. Major aphthous ulcers are larger and take longer to heal, while herpetic ulcers are caused by the herpes simplex virus and oral cancer would typically present with a larger, non-healing ulcer.",
      choices: [
        {
          id: "c1",
          content: "Minor aphthous ulcer",
          explanation: "Correct!",
          question_id: "q70",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Major aphthous ulcer",
          explanation: "Incorrect.",
          question_id: "q70",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Herpetic ulcer",
          explanation: "Incorrect.",
          question_id: "q70",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Oral cancer",
          explanation: "Incorrect.",
          question_id: "q70",
          is_correct: false,
        },
      ],
    },
    {
      id: "q73",
      content:
        "If a dental assistant discusses a patient's case with her friend, which principle of medical ethics does this violate?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The principle of confidentiality is a key aspect of medical ethics that requires healthcare professionals to keep a patient's personal health information private unless consent to release the information is provided by the patient. This includes not discussing the patient's case with friends, family, or other unauthorized individuals. In this scenario, the dental assistant discussing the patient's case with her friend violates this principle.",
      choices: [
        {
          id: "c1",
          content: "Principle of Autonomy",
          explanation: "Incorrect.",
          question_id: "q73",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Principle of Non-Maleficence",
          explanation: "Incorrect.",
          question_id: "q73",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Principle of Beneficence",
          explanation: "Incorrect.",
          question_id: "q73",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Principle of Confidentiality",
          explanation: "Correct!",
          question_id: "q73",
          is_correct: true,
        },
      ],
    },
    {
      id: "q74",
      content:
        "What is the appropriate local anesthesia technique for the upper molar of a pediatric patient?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The appropriate local anesthesia technique for the upper molar of a pediatric patient is the posterior superior alveolar nerve block and greater palatine nerve block. The posterior superior alveolar nerve block anesthetizes the maxillary molars except the mesiobuccal root of the first molar, which is usually innervated by the middle superior alveolar nerve. The greater palatine nerve block anesthetizes the hard palate and overlying tissues from the first premolar to the third molar area.",
      choices: [
        {
          id: "c1",
          content:
            "Posterior superior alveolar nerve block and greater palatine nerve block",
          explanation: "Correct!",
          question_id: "q74",
          is_correct: true,
        },
        {
          id: "c2",
          content:
            "Middle superior alveolar nerve block and greater palatine nerve block",
          explanation: "Incorrect.",
          question_id: "q74",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Inferior alveolar nerve block and lingual nerve block",
          explanation: "Incorrect.",
          question_id: "q74",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Buccal nerve block and inferior alveolar nerve block",
          explanation: "Incorrect.",
          question_id: "q74",
          is_correct: false,
        },
      ],
    },
    {
      id: "q76",
      content:
        "A patient presents with white patches on their teeth and a high consumption of carbohydrates. The patient's mother reports that she has experienced the same issue. What is the most likely diagnosis?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The patient's symptoms suggest a diagnosis of Amelogenesis Imperfecta. This is a genetic condition that affects the formation of enamel, often leading to white patches on the teeth. The fact that the patient's mother has experienced the same issue further supports this diagnosis. While high carbohydrate consumption can contribute to dental caries, the presence of white patches and the familial pattern suggest a genetic enamel disorder rather than caries.",
      choices: [
        {
          id: "c1",
          content: "Dental Caries",
          explanation: "Incorrect.",
          question_id: "q76",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Amelogenesis Imperfecta",
          explanation: "Correct!",
          question_id: "q76",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Dentinogenesis Imperfecta",
          explanation: "Incorrect.",
          question_id: "q76",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Fluorosis",
          explanation: "Incorrect.",
          question_id: "q76",
          is_correct: false,
        },
      ],
    },
    {
      id: "q77",
      content:
        "What generation of bonding process is characterized by etching with 37% phosphoric acid for 20 seconds, drying and leaving a wet surface, then applying a bonding agent for 20 seconds and curing?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The described process corresponds to the 5th Generation of bonding. This generation introduced the concept of 'wet bonding', where the dentin is kept moist after the etching process. The bonding agent is then applied to the moist surface and cured. This technique is most commonly used in modern dentistry.",
      choices: [
        {
          id: "c1",
          content: "4th Generation 'Gold Standard'",
          explanation: "Incorrect.",
          question_id: "q77",
          is_correct: false,
        },
        {
          id: "c2",
          content: "5th Generation 'Most Commonly Used'",
          explanation: "Correct!",
          question_id: "q77",
          is_correct: true,
        },
        {
          id: "c3",
          content: "6th Generation",
          explanation: "Incorrect.",
          question_id: "q77",
          is_correct: false,
        },
        {
          id: "c4",
          content: "8th Generation",
          explanation: "Incorrect.",
          question_id: "q77",
          is_correct: false,
        },
      ],
    },
    {
      id: "q78",
      content:
        "A patient wishes to replace her anterior veneers due to dissatisfaction with their appearance. Which type of preparation would be most aesthetically pleasing and help avoid gingival inflammation?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Supragingival preparation is the most suitable choice for replacing anterior veneers when the patient is concerned about aesthetics and wants to avoid gingival inflammation. This type of preparation is done above the gum line, which reduces the risk of gingival inflammation. Subgingival, subcrestal, and tissue level preparations involve manipulation below the gum line, which can potentially lead to inflammation.",
      choices: [
        {
          id: "c1",
          content: "Supragingival preparation",
          explanation: "Correct!",
          question_id: "q78",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Subgingival preparation",
          explanation: "Incorrect.",
          question_id: "q78",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Subcrestal preparation",
          explanation: "Incorrect.",
          question_id: "q78",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Tissue level preparation",
          explanation: "Incorrect.",
          question_id: "q78",
          is_correct: false,
        },
      ],
    },
    {
      id: "q79",
      content:
        "A 20-year-old male patient with severe autism requires extraction of several teeth. Who is legally authorized to sign the consent form for this procedure?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In the case of a severely autistic patient who may not have the capacity to understand the implications of the dental procedure, the consent form should be signed by a legal guardian. In this case, it is assumed that the patient's father is the legal guardian. The nurse or doctor cannot sign the consent form as it would be a conflict of interest.",
      choices: [
        {
          id: "c1",
          content: "The patient himself",
          explanation: "Incorrect.",
          question_id: "q79",
          is_correct: false,
        },
        {
          id: "c2",
          content: "The patient's father",
          explanation: "Correct!",
          question_id: "q79",
          is_correct: true,
        },
        {
          id: "c3",
          content: "The patient's nurse",
          explanation: "Incorrect.",
          question_id: "q79",
          is_correct: false,
        },
        {
          id: "c4",
          content: "The patient's doctor",
          explanation: "Incorrect.",
          question_id: "q79",
          is_correct: false,
        },
      ],
    },
    {
      id: "q80",
      content:
        "A patient has had an accident and is now in the Intensive Care Unit (ICU) in a comatose state. Prior to this, he had expressed to his wife that in the event of a medical emergency rendering him unconscious and requiring intervention, he would prefer to be allowed to die rather than being paralyzed or reliant on a medical device. He gave his wife the authority to make this decision. However, his father is against this and insists on treating him to the fullest extent possible to save his life. According to Sharia law, who has the authority to make the decision in this case?",
      category_id: "geography",
      image_url: "",
      explanation:
        "According to Sharia law, the person who has been given the authority by the patient prior to his incapacitation has the right to make decisions on his behalf. In this case, the patient had given this authority to his wife, therefore she has the right to make the decision.",
      choices: [
        {
          id: "c1",
          content: "The patient's wife",
          explanation: "Correct!",
          question_id: "q80",
          is_correct: true,
        },
        {
          id: "c2",
          content: "The patient's father",
          explanation: "Incorrect.",
          question_id: "q80",
          is_correct: false,
        },
        {
          id: "c3",
          content: "The attending physician",
          explanation: "Incorrect.",
          question_id: "q80",
          is_correct: false,
        },
        {
          id: "c4",
          content: "A reporter",
          explanation: "Incorrect.",
          question_id: "q80",
          is_correct: false,
        },
      ],
    },
    {
      id: "q82",
      content:
        "What type of clasp and cross-section shape should be used for a patient needing a Removable Partial Denture (RPD) with a Class II Kennedy classification, where the premolar is the most distal abutment intact and has no restoration?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In a Class II Kennedy classification where the premolar is the most distal abutment intact and has no restoration, a cast clasp and half round cross-sectioned is the most suitable choice. Cast clasps are more rigid and provide better retention for RPDs, especially in cases where the abutment teeth are intact and have no restoration. The half round cross-section is preferred as it provides a balance between flexibility and rigidity, which is necessary for the clasp to function properly.",
      choices: [
        {
          id: "c1",
          content: "Cast clasp and half round cross-sectioned",
          explanation: "Correct!",
          question_id: "q82",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Cast clasp and round cross-sectioned",
          explanation: "Incorrect.",
          question_id: "q82",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Wrought wire clasp and half round cross-sectioned",
          explanation: "Incorrect.",
          question_id: "q82",
          is_correct: false,
        },
        {
          id: "c4",
          content:
            "Wrought wire clasp and round cross-sectioned (if tooth is periodontically compromised this is correct)",
          explanation: "Incorrect.",
          question_id: "q82",
          is_correct: false,
        },
      ],
    },
    {
      id: "q83",
      content:
        "A patient presents with a white lesion in the buccal mucosa that extends to the distal of the corner of the mouth. The lesion does not move when the mucosa is stretched and cannot be wiped off. What is the most likely diagnosis?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The patient's symptoms are indicative of leukoedema, a benign, generally harmless condition commonly seen in the buccal mucosa. It is characterized by a white, milky appearance that does not wipe off and does not move when the mucosa is stretched. White spongy nevus, oral lichen planus, and oral candidiasis are other conditions that can cause white lesions in the mouth, but they have different characteristics and symptoms.",
      choices: [
        {
          id: "c1",
          content: "White spongy nevus",
          explanation: "Incorrect.",
          question_id: "q83",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Leukoedema",
          explanation: "Correct!",
          question_id: "q83",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Oral lichen planus",
          explanation: "Incorrect.",
          question_id: "q83",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Oral candidiasis",
          explanation: "Incorrect.",
          question_id: "q83",
          is_correct: false,
        },
      ],
    },
    {
      id: "q84",
      content:
        "A radiograph presents a case of Necrotizing Ulcerative Gingivitis (NUG). The patient has been experiencing severe pain for a week and has been unable to maintain regular oral hygiene due to the pain. What would be the most appropriate management strategy for this patient?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "The primary management strategy for Necrotizing Ulcerative Gingivitis (NUG) involves improving oral hygiene. This can be achieved by providing Oral Hygiene Instructions (OHI) to the patient. Antibiotics may be used as an adjunct treatment, but they are not the primary mode of management. Surgical flap procedures and steroids are not typically used in the management of NUG.",
      choices: [
        {
          id: "c1",
          content: "Prescribe antibiotics",
          explanation: "Incorrect.",
          question_id: "q84",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Provide Oral Hygiene Instructions (OHI)",
          explanation: "Correct!",
          question_id: "q84",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Perform a surgical flap procedure",
          explanation: "Incorrect.",
          question_id: "q84",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Administer steroids",
          explanation: "Incorrect.",
          question_id: "q84",
          is_correct: false,
        },
      ],
    },
    {
      id: "q85",
      content:
        "In a 60-year-old patient with severe bone loss who requires extraction of all maxillary teeth in a quadrant, which tooth should be the first to be extracted?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In a patient with severe bone loss, the most mobile tooth should be the first to be extracted. This is because the mobility of a tooth is a direct indication of the severity of bone loss around that tooth. Extracting the most mobile tooth first can help to prevent further bone loss in the surrounding teeth and can also make the extraction process easier and less traumatic for the patient.",
      choices: [
        {
          id: "c1",
          content: "The most mobile tooth",
          explanation: "Correct!",
          question_id: "q85",
          is_correct: true,
        },
        {
          id: "c2",
          content:
            "Start from the anterior teeth and proceed to the posterior teeth",
          explanation: "Incorrect.",
          question_id: "q85",
          is_correct: false,
        },
        {
          id: "c3",
          content:
            "Start from the posterior teeth and proceed to the anterior teeth",
          explanation: "Incorrect.",
          question_id: "q85",
          is_correct: false,
        },
        {
          id: "c4",
          content: "The tooth with the most severe bone loss",
          explanation: "Incorrect.",
          question_id: "q85",
          is_correct: false,
        },
      ],
    },
    {
      id: "q86",
      content:
        "A patient presents with inflamed gingiva, plaque, and calculus. The patient also has uncontrolled diabetes and high blood pressure with a reading of 158/89. What is the most significant risk factor for this patient's oral condition?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "While poor oral hygiene, hypertension, and certain medications can contribute to oral health problems, uncontrolled diabetes is a major risk factor for periodontal disease. Diabetes can weaken the body's overall immune system, making it more susceptible to infections, including periodontal diseases. Furthermore, diabetes can cause blood vessels to thicken, which can slow the flow of nutrients to and waste products from body tissues, including the mouth, thus potentially exacerbating periodontal disease.",
      choices: [
        {
          id: "c1",
          content: "Poor oral hygiene",
          explanation: "Incorrect.",
          question_id: "q86",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Uncontrolled diabetes",
          explanation: "Correct!",
          question_id: "q86",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Hypertension",
          explanation: "Incorrect.",
          question_id: "q86",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Unspecified medication",
          explanation: "Incorrect.",
          question_id: "q86",
          is_correct: false,
        },
      ],
    },
    {
      id: "q87",
      content:
        "What is the most appropriate course of action for a dentist when dealing with an asthmatic patient who exhibits nervousness and fear of the dentist, and has a known allergy to diazepam?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In this scenario, the most appropriate course of action would be to administer nitrous oxide sedation. Nitrous oxide is a safe and effective sedative agent that is mixed with oxygen and inhaled through a small mask that fits over the patient's nose. It helps patients relax and is often used in patients who are anxious or fearful of dental procedures. An allergy test for diazepam would not be helpful as the patient already has a known allergy. Local anesthesia with epinephrine is not recommended for asthmatic patients as it can potentially trigger an asthma attack. Steroids are not typically used for dental procedures unless the patient has a severe inflammatory condition.",
      choices: [
        {
          id: "c1",
          content: "Perform an allergy test for diazepam",
          explanation: "Incorrect.",
          question_id: "q87",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Administer nitrous oxide sedation",
          explanation: "Correct!",
          question_id: "q87",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Administer local anesthesia with epinephrine",
          explanation: "Incorrect.",
          question_id: "q87",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Administer steroids",
          explanation: "Incorrect.",
          question_id: "q87",
          is_correct: false,
        },
      ],
    },
    {
      id: "q88",
      content:
        "An 18-year-old healthy student presents for a routine check-up. He maintains good oral hygiene but smokes shisha weekly. He has a foul odor and pseudomembranous bluish gingiva. What is the most appropriate course of action?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The patient's symptoms of foul odor and pseudomembranous bluish gingiva, along with the fact that he smokes shisha weekly, suggest a diagnosis of Necrotizing Ulcerative Gingivitis (NUG). NUG is a severe form of gingivitis that can cause painful, bleeding gums, and ulcers. It is often associated with poor oral hygiene, stress, and smoking. The most appropriate course of action in this case would be to prescribe antibiotics to treat the infection.",
      choices: [
        {
          id: "c1",
          content: "Perform a biopsy",
          explanation: "Incorrect.",
          question_id: "q88",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Perform scaling and provide oral hygiene instructions",
          explanation: "Incorrect.",
          question_id: "q88",
          is_correct: false,
        },
        {
          id: "c3",
          content:
            "Prescribe antibiotics as the diagnosis might be Necrotizing Ulcerative Gingivitis (NUG) characterized by foul odor and pseudomembranous gingiva",
          explanation: "Correct!",
          question_id: "q88",
          is_correct: true,
        },
        {
          id: "c4",
          content:
            "Refer the patient to a specialist for further investigation",
          explanation: "Incorrect.",
          question_id: "q88",
          is_correct: false,
        },
      ],
    },
    {
      id: "q89",
      content:
        "A patient presents with a 5cm x 4cm ulceration in the tongue that is causing dysphagia. What would be the most appropriate initial treatment?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In the case of a large ulceration causing dysphagia, an incisional biopsy would be the most appropriate initial treatment. This would allow for a diagnosis to be made based on the histopathological examination of the biopsy sample, and for a treatment plan to be formulated accordingly. Aspiration would not provide sufficient information for diagnosis, antifungal medication would only be appropriate if a fungal infection was suspected, and excision without prior biopsy could potentially remove a malignant lesion without appropriate margins.",
      choices: [
        {
          id: "c1",
          content: "Aspiration of the ulcer",
          explanation: "Incorrect.",
          question_id: "q89",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Administration of antifungal medication",
          explanation: "Incorrect.",
          question_id: "q89",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Excision of the ulcer",
          explanation: "Incorrect.",
          question_id: "q89",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Incisional biopsy of the ulcer",
          explanation: "Correct!",
          question_id: "q89",
          is_correct: true,
        },
      ],
    },
    {
      id: "q90",
      content:
        "A four-year-old patient presents with extensive caries and multiple abscesses. Additionally, bruising is noticed on her arm and neck. What could be the possible diagnosis?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The presence of extensive caries and multiple abscesses in a four-year-old child, along with bruising in non-explanatory areas such as the arm and neck, strongly suggests child abuse and neglect. While hemophilia, leukemia, and vitamin K deficiency can cause bruising, they would not typically result in extensive dental caries and abscesses.",
      choices: [
        {
          id: "c1",
          content: "Child abuse and neglect",
          explanation: "Correct!",
          question_id: "q90",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Hemophilia",
          explanation: "Incorrect.",
          question_id: "q90",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Leukemia",
          explanation: "Incorrect.",
          question_id: "q90",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Vitamin K deficiency",
          explanation: "Incorrect.",
          question_id: "q90",
          is_correct: false,
        },
      ],
    },
    {
      id: "q91",
      content:
        "In a patient with a thin scalloped gingival phenotype who is considering orthodontic treatment, what is the most likely complication if the treatment is not performed?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In patients with a thin scalloped gingival phenotype, the gingival tissue is thin and highly susceptible to recession, especially when subjected to orthodontic forces. If orthodontic treatment is not performed, the most likely complication is gingival recession. The other options, such as gingival enlargement, internal resorption, and external root resorption, are less likely in this scenario.",
      choices: [
        {
          id: "c1",
          content: "Gingival recession",
          explanation: "Correct!",
          question_id: "q91",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Gingival enlargement",
          explanation: "Incorrect.",
          question_id: "q91",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Internal resorption",
          explanation: "Incorrect.",
          question_id: "q91",
          is_correct: false,
        },
        {
          id: "c4",
          content: "External root resorption",
          explanation: "Incorrect.",
          question_id: "q91",
          is_correct: false,
        },
      ],
    },
    {
      id: "q92",
      content:
        "Which of the following is a type of resorbable sealer used in dentistry?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Bioceramic sealers are a type of resorbable sealer used in dentistry. They are bioactive and have excellent sealing ability, biocompatibility, and antibacterial properties. Resin-based sealers, Glass Ionomer Cement (GIC), and Zinc Oxide Eugenol (ZOE) are not resorbable.",
      choices: [
        {
          id: "c1",
          content: "Bioceramic sealer",
          explanation: "Correct!",
          question_id: "q92",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Resin-based sealer",
          explanation: "Incorrect.",
          question_id: "q92",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Glass Ionomer Cement (GIC)",
          explanation: "Incorrect.",
          question_id: "q92",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Zinc Oxide Eugenol (ZOE)",
          explanation: "Incorrect.",
          question_id: "q92",
          is_correct: false,
        },
      ],
    },
    {
      id: "q93",
      content:
        "What does the term 'file patency' refer to in the context of endodontics?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In endodontics, 'file patency' refers to the process of maintaining the cleanliness and openness of the apical foramen during root canal treatment. This is typically achieved by using a small file (usually a K-file of size 10 or 15) to extend slightly beyond the apex of the tooth. This helps to prevent blockage and allows for more effective cleaning and shaping of the canal.",
      choices: [
        {
          id: "c1",
          content:
            "A small file extending beyond the apex, usually a K-file of size 10 or 15",
          explanation: "Correct!",
          question_id: "q93",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Using a large file to widen the root canal",
          explanation: "Incorrect.",
          question_id: "q93",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Using a file to remove the pulp from the tooth",
          explanation: "Incorrect.",
          question_id: "q93",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Using a file to smooth the edges of the tooth",
          explanation: "Incorrect.",
          question_id: "q93",
          is_correct: false,
        },
      ],
    },
    {
      id: "q94",
      content:
        "Which method is commonly used for carrier-based gutta-percha obturation in endodontic treatment?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Carrier-based gutta-percha obturation is a method used in endodontic treatment to fill the root canal system. The most commonly used method for this is Thermafil, which uses a plastic carrier coated with alpha-phase gutta-percha. The other options, vertical compaction, lateral compaction, and warm vertical compaction, are methods used for non-carrier-based gutta-percha obturation.",
      choices: [
        {
          id: "c1",
          content: "Thermafil",
          explanation: "Correct!",
          question_id: "q94",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Vertical compaction",
          explanation: "Incorrect.",
          question_id: "q94",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Lateral compaction",
          explanation: "Incorrect.",
          question_id: "q94",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Warm vertical compaction",
          explanation: "Incorrect.",
          question_id: "q94",
          is_correct: false,
        },
      ],
    },
    {
      id: "q96",
      content:
        "In the case of a patient diagnosed with Angular cheilitis, which dietary supplement would be most appropriate to recommend?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Angular cheilitis is often associated with iron deficiency anemia, hence, iron supplements would be the most appropriate to recommend. While other supplements like zinc, calcium, and vitamin C are essential for overall health, they are not directly linked to the treatment of angular cheilitis.",
      choices: [
        {
          id: "c1",
          content: "Zinc",
          explanation: "Incorrect.",
          question_id: "q96",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Iron",
          explanation: "Correct!",
          question_id: "q96",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Calcium",
          explanation: "Incorrect.",
          question_id: "q96",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Vitamin C",
          explanation: "Incorrect.",
          question_id: "q96",
          is_correct: false,
        },
      ],
    },
    {
      id: "q97",
      content:
        "A patient with a history of angina suddenly experiences chest pain, shortness of breath, and loses consciousness during dental treatment. What is the appropriate management for this situation?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In a situation where a patient with a history of angina experiences sudden chest pain, shortness of breath, and loses consciousness, the appropriate management would be to administer nitroglycerin to relieve the angina, provide oxygen to aid in respiration, and perform first aid CPR to restore circulation and breathing. This combination of actions is necessary to address the immediate life-threatening situation.",
      choices: [
        {
          id: "c1",
          content: "Administer nitroglycerin only",
          explanation: "Incorrect.",
          question_id: "q97",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Administer oxygen only",
          explanation: "Incorrect.",
          question_id: "q97",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Perform first aid CPR only",
          explanation: "Incorrect.",
          question_id: "q97",
          is_correct: false,
        },
        {
          id: "c4",
          content:
            "Administer nitroglycerin, oxygen, and perform first aid CPR",
          explanation: "Correct!",
          question_id: "q97",
          is_correct: true,
        },
      ],
    },
    {
      id: "q98",
      content:
        "In a scenario where an asthmatic patient experiences loss of breath during dental treatment and has two inhalers: a bronchodilator and a steroid, which medication should be administered?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In the event of an asthma attack, the bronchodilator inhaler should be used. Bronchodilators work by relaxing the muscles around the airways, allowing them to open up and make breathing easier. Beta blockers, whether short or long acting, are not typically used in the treatment of an acute asthma attack.",
      choices: [
        {
          id: "c1",
          content: "Short-acting beta blockers",
          explanation: "Incorrect.",
          question_id: "q98",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Long-acting beta blockers",
          explanation: "Incorrect.",
          question_id: "q98",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Bronchodilator",
          explanation: "Correct!",
          question_id: "q98",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Steroid inhaler",
          explanation: "Incorrect.",
          question_id: "q98",
          is_correct: false,
        },
      ],
    },
    {
      id: "q99",
      content:
        "A 13-year-old patient with Down Syndrome presents in the emergency room with a dental infection that requires immediate extraction. Who is legally authorized to sign the consent form for this procedure?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In the case of a minor patient with Down Syndrome, the individual who is legally authorized to sign the consent form for a dental procedure is the patient's legal guardian. This is typically the patient's parent or appointed guardian. The attending physician, patient's sibling, or patient's classmate do not have the legal authority to provide consent for the procedure.",
      choices: [
        {
          id: "c1",
          content: "Attending Physician",
          explanation: "Incorrect.",
          question_id: "q99",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Patient's Sibling",
          explanation: "Incorrect.",
          question_id: "q99",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Patient's Legal Guardian",
          explanation: "Correct!",
          question_id: "q99",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Patient's Classmate",
          explanation: "Incorrect.",
          question_id: "q99",
          is_correct: false,
        },
      ],
    },
    {
      id: "q100",
      content:
        "In a scenario where a patient with Down syndrome is unable to comprehend the explanation of the treatment plan, who is legally responsible to sign the consent form?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In cases where a patient is unable to understand the explanation of the treatment plan due to a condition like Down syndrome, the legal responsibility to sign the consent form falls on the patient's legal guardian. This is because the legal guardian is entrusted with making decisions that are in the best interest of the individual who is unable to do so for themselves.",
      choices: [
        {
          id: "c1",
          content: "Patient's sibling",
          explanation: "Incorrect.",
          question_id: "q100",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Patient's friend",
          explanation: "Incorrect.",
          question_id: "q100",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Patient's employer",
          explanation: "Incorrect.",
          question_id: "q100",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Patient's legal guardian",
          explanation: "Correct!",
          question_id: "q100",
          is_correct: true,
        },
      ],
    },
    {
      id: "q101",
      content:
        "A 13-year-old patient presents with an ankylosed primary second molar and there is no evidence of a successor tooth in the radiograph. What is the most appropriate course of action?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "In cases where a primary tooth is ankylosed and there is no successor tooth visible in the radiograph, it is generally recommended to refer the patient to a specialist. This is because the management of such cases can be complex and may require specialized knowledge and skills. Extraction or orthodontic treatment may not be the best course of action without further evaluation by a specialist. Monitoring the condition without immediate intervention could lead to complications such as space loss, infraocclusion, and potential damage to adjacent teeth.",
      choices: [
        {
          id: "c1",
          content: "Extract the ankylosed tooth",
          explanation: "Incorrect.",
          question_id: "q101",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Refer the patient to a specialist",
          explanation: "Correct!",
          question_id: "q101",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Begin orthodontic treatment",
          explanation: "Incorrect.",
          question_id: "q101",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Monitor the condition without immediate intervention",
          explanation: "Incorrect.",
          question_id: "q101",
          is_correct: false,
        },
      ],
    },
    {
      id: "q102",
      content:
        "Which syndrome is characterized by the presence of micrognathia, an enlarged tongue, and a cleft lip/palate in a patient?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Pierre Robin syndrome is a condition characterized by a sequence of anomalies including micrognathia (an unusually small jaw), glossoptosis (a downwardly displaced or retracted tongue), and a cleft lip/palate. This combination of features can lead to difficulty breathing and problems with eating early in life.",
      choices: [
        {
          id: "c1",
          content: "Pierre Robin syndrome",
          explanation: "Correct!",
          question_id: "q102",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Down syndrome",
          explanation: "Incorrect.",
          question_id: "q102",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Marfan syndrome",
          explanation: "Incorrect.",
          question_id: "q102",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Treacher Collins syndrome",
          explanation: "Incorrect.",
          question_id: "q102",
          is_correct: false,
        },
      ],
    },
    {
      id: "q103",
      content:
        "What is the likely diagnosis for a 14-month-old child presenting with a bluish swelling in the alveolar region?",
      category_id: "geography",
      image_url: "",
      explanation:
        "An eruption hematoma, also known as an eruption cyst, is a bluish swelling that appears on the alveolar ridge during the eruption of a tooth. It is caused by a fluid-filled sac that forms over an erupting tooth, usually primary incisors or molars. Bohn's nodules, Epstein's pearls, and dental abscesses do not present as a bluish swelling in the alveolar region.",
      choices: [
        {
          id: "c1",
          content: "Eruption hematoma",
          explanation: "Correct!",
          question_id: "q103",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Bohn's nodule",
          explanation: "Incorrect.",
          question_id: "q103",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Epstein's pearl",
          explanation: "Incorrect.",
          question_id: "q103",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Dental abscess",
          explanation: "Incorrect.",
          question_id: "q103",
          is_correct: false,
        },
      ],
    },
    {
      id: "q104",
      content:
        "During which phase of tooth formation does a lateral incisor take on a peg-shaped form?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The shape of the tooth, including a peg-shaped lateral incisor, is determined during the morphodifferentiation phase of tooth formation. This phase involves the development of the specific shape or morphology of the tooth. The other phases - initiation, proliferation, and histodifferentiation - are involved in the beginning of tooth development, growth of the tooth bud, and differentiation of the tooth tissues, respectively.",
      choices: [
        {
          id: "c1",
          content: "Initiation phase",
          explanation: "Incorrect.",
          question_id: "q104",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Proliferation phase",
          explanation: "Incorrect.",
          question_id: "q104",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Histodifferentiation phase",
          explanation: "Incorrect.",
          question_id: "q104",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Morphodifferentiation phase",
          explanation: "Correct!",
          question_id: "q104",
          is_correct: true,
        },
      ],
    },
    {
      id: "q105",
      content:
        "What is the dental condition characterized by the clinical appearance of two teeth occupying the same space, with no loss of teeth and a normal count of teeth?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Tooth gemination is a dental phenomenon that appears to be two teeth developed from one. It occurs when a single tooth bud attempts to divide, but the division is incomplete. This results in a large tooth with a bifid crown and a single root and root canal. The number of teeth remains normal because the geminated tooth is counted as one. On the other hand, tooth fusion is the union of two normally separated tooth germs, and depending upon the stage of development of the teeth at the time of union, it may be either complete or incomplete. This usually results in a decrease in the tooth count.",
      choices: [
        {
          id: "c1",
          content: "Tooth fusion",
          explanation: "Incorrect.",
          question_id: "q105",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Tooth gemination",
          explanation: "Correct!",
          question_id: "q105",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Tooth transposition",
          explanation: "Incorrect.",
          question_id: "q105",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Tooth impaction",
          explanation: "Incorrect.",
          question_id: "q105",
          is_correct: false,
        },
      ],
    },
    {
      id: "q106",
      content:
        "A patient has completed treatment for Hepatitis C. What is the most appropriate method to determine if the patient is still a carrier of the virus?",
      category_id: "geography",
      image_url: "",
      explanation:
        "To determine if a patient is still a carrier of Hepatitis C virus after treatment, a test for the presence of Hepatitis C virus RNA is the most appropriate. This is because the RNA test can detect the virus itself, indicating an ongoing infection. Testing for the presence of the Hepatitis C virus antigen or antibodies only indicates past exposure to the virus, not whether the patient is currently a carrier. Hepatitis C is an RNA virus, so testing for DNA would not be appropriate.",
      choices: [
        {
          id: "c1",
          content: "Testing for the presence of the Hepatitis C virus antigen",
          explanation: "Incorrect.",
          question_id: "q106",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Testing for the presence of Hepatitis C virus antibodies",
          explanation: "Incorrect.",
          question_id: "q106",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Testing for the presence of Hepatitis C virus RNA",
          explanation: "Correct!",
          question_id: "q106",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Testing for the presence of Hepatitis C virus DNA",
          explanation: "Incorrect.",
          question_id: "q106",
          is_correct: false,
        },
      ],
    },
    {
      id: "q107",
      content:
        "You have planned to perform an anterior crown procedure for a pediatric patient who has extensive caries. Which nerve would you administer anesthesia to in this case?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The Anterior Superior Alveolar nerve and the Nasopalatine nerve are responsible for the sensation in the anterior teeth. Therefore, when performing an anterior crown procedure on a pediatric patient with extensive caries, anesthesia would be administered to these nerves to numb the area and prevent pain during the procedure.",
      choices: [
        {
          id: "c1",
          content: "Anterior Superior Alveolar nerve and Nasopalatine nerve",
          explanation: "Correct!",
          question_id: "q107",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Posterior Superior Alveolar nerve",
          explanation: "Incorrect.",
          question_id: "q107",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Middle Superior Alveolar nerve",
          explanation: "Incorrect.",
          question_id: "q107",
          is_correct: false,
        },
      ],
    },
    {
      id: "q108",
      content:
        "In a clinical scenario where a patient with a pronounced masseter muscle and a large tongue has previously experienced difficulties with anesthesia administration, what would be the most effective method to handle the anesthesia administration this time?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In a situation where a patient has a pronounced masseter muscle and a large tongue, it can be challenging to administer anesthesia effectively. The best approach in this case would be to use a finger or thumb to retract the cheek for better control. This method allows for a more direct path to the injection site and reduces the risk of needle deflection. The other options, while potentially helpful, do not directly address the specific challenges presented by this patient's anatomy.",
      choices: [
        {
          id: "c1",
          content: "Utilize a short needle for improved handling",
          explanation: "Incorrect.",
          question_id: "q108",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Administer the anesthesia at a slow pace",
          explanation: "Incorrect.",
          question_id: "q108",
          is_correct: false,
        },
        {
          id: "c3",
          content:
            "Use a finger or thumb to retract the cheek for better control",
          explanation: "Correct!",
          question_id: "q108",
          is_correct: true,
        },
        {
          id: "c4",
          content:
            "Employ a dental mirror to retract the cheek and enhance visibility",
          explanation: "Incorrect.",
          question_id: "q108",
          is_correct: false,
        },
      ],
    },
    {
      id: "q109",
      content:
        "A patient with end-stage renal failure presents with halitosis (bad breath). What is the primary cause of this symptom?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In patients with end-stage renal failure, halitosis (bad breath) is primarily caused by the production of ammonia. This is due to the inability of the kidneys to properly filter waste products from the blood, leading to an accumulation of waste products such as urea. Urea is broken down into ammonia by salivary enzymes, which can cause a foul smell.",
      choices: [
        {
          id: "c1",
          content: "Ammonia production",
          explanation: "Correct!",
          question_id: "q109",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Excessive oral bacteria",
          explanation: "Incorrect.",
          question_id: "q109",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Periodontal disease",
          explanation: "Incorrect.",
          question_id: "q109",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Consumption of odorous foods",
          explanation: "Incorrect.",
          question_id: "q109",
          is_correct: false,
        },
      ],
    },
    {
      id: "q110",
      content:
        "A patient who had a renal transplantation two months ago presents for a routine dental check-up. What is the most appropriate course of action in this scenario?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Patients who have undergone organ transplantation, such as renal transplantation, are typically on immunosuppressive therapy to prevent organ rejection. This makes them more susceptible to infections, including those that can occur following dental procedures. Therefore, it is generally recommended to defer any elective dental treatment until at least 6 months after the transplantation when the patient's immune system has had time to recover and the risk of infection is lower. Emergency dental treatment may still be necessary during this period, but should be carried out with caution and appropriate antibiotic prophylaxis.",
      choices: [
        {
          id: "c1",
          content: "Proceed with the routine dental check-up as normal",
          explanation: "Incorrect.",
          question_id: "q110",
          is_correct: false,
        },
        {
          id: "c2",
          content:
            "Defer any elective dental treatment until 6 months after the renal transplantation",
          explanation: "Correct!",
          question_id: "q110",
          is_correct: true,
        },
        {
          id: "c3",
          content:
            "Defer any dental treatment until 6 months after the renal transplantation and only treat dental emergencies",
          explanation: "Incorrect.",
          question_id: "q110",
          is_correct: false,
        },
        {
          id: "c4",
          content:
            "Proceed with the routine dental check-up but avoid any invasive procedures",
          explanation: "Incorrect.",
          question_id: "q110",
          is_correct: false,
        },
      ],
    },
    {
      id: "q111",
      content:
        "An athlete has experienced trauma and lost tooth number 11. Given the available width space between the natural teeth is 10 mm from the gingival level and 7 mm between the crowns of the natural teeth, what type of dental implant should be used? The image attached shows different sizes of implants, for example, the tissue implant is 4.8 mm and the bone implant is 6.5 mm.",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "In this case, a bone level implant is the most suitable choice. The bone level implant is designed to be placed at or slightly below the level of the bone. This type of implant is often used in the aesthetic zone, like tooth number 11, because it allows for better control of the gingival contour and interdental papilla. The measurements provided in the question indicate that there is sufficient space for a bone level implant.",
      choices: [
        {
          id: "c1",
          content: "Tissue level implant",
          explanation: "Incorrect.",
          question_id: "q111",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Bone level implant",
          explanation: "Correct!",
          question_id: "q111",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Subperiosteal implant",
          explanation: "Incorrect.",
          question_id: "q111",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Transosteal implant",
          explanation: "Incorrect.",
          question_id: "q111",
          is_correct: false,
        },
      ],
    },
    {
      id: "q112",
      content:
        "In the context of a cephalometric drawing, if a point is labeled as number 18, what anatomical landmark does this number typically represent?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "In cephalometric drawings, different numbers are used to denote specific anatomical landmarks. Number 18 typically represents the Posterior Nasal Spine (PNS). The PNS is the pointed posterior end of the hard palate and is a significant landmark in cephalometric analysis.",
      choices: [
        {
          id: "c1",
          content: "Posterior nasal spine (PNS)",
          explanation: "Correct!",
          question_id: "q112",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Anterior nasal spine (ANS)",
          explanation: "Incorrect.",
          question_id: "q112",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Gonion (Go)",
          explanation: "Incorrect.",
          question_id: "q112",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Articulare (Ar)",
          explanation: "Incorrect.",
          question_id: "q112",
          is_correct: false,
        },
      ],
    },
    {
      id: "q113",
      content:
        "Which of the following best describes the characteristics of the well-known dental implant often depicted in images?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "The well-known dental implant often depicted in images is typically a straight wall two stage implant. This type of implant is designed to be placed in two stages: first, the implant is placed within the jawbone and allowed to heal, then the abutment is attached to the implant in the second stage. The straight wall design refers to the shape of the implant, which has straight sides rather than being tapered or threaded.",
      choices: [
        {
          id: "c1",
          content: "Straight wall two stage implant",
          explanation: "Correct!",
          question_id: "q113",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Tapered single stage implant",
          explanation: "Incorrect.",
          question_id: "q113",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Threaded three stage implant",
          explanation: "Incorrect.",
          question_id: "q113",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Non-threaded single stage implant",
          explanation: "Incorrect.",
          question_id: "q113",
          is_correct: false,
        },
      ],
    },
    {
      id: "q114",
      content:
        "What is the primary cause of shortened roots in teeth with orthodontic brackets?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Excessive orthodontic force is the primary cause of root resorption, leading to shortened roots in teeth with orthodontic brackets. This is because the excessive force can disrupt the balance between bone formation and resorption, leading to the loss of root structure. The other options, such as inadequate oral hygiene, natural genetic predisposition, and insufficient calcium intake, can contribute to overall oral health issues but are not directly linked to root shortening in orthodontic treatment.",
      choices: [
        {
          id: "c1",
          content: "Excessive orthodontic force",
          explanation: "Correct!",
          question_id: "q114",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Inadequate oral hygiene",
          explanation: "Incorrect.",
          question_id: "q114",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Natural genetic predisposition",
          explanation: "Incorrect.",
          question_id: "q114",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Insufficient calcium intake",
          explanation: "Incorrect.",
          question_id: "q114",
          is_correct: false,
        },
      ],
    },
    {
      id: "q115",
      content:
        "How should a Class 3 malocclusion patient with a normal mandible but a retruded maxilla be managed?",
      category_id: "geography",
      image_url: "",
      explanation:
        "A Class 3 malocclusion patient with a normal mandible but a retruded maxilla can be managed by performing a Lefort I advancement. This procedure involves surgically moving the maxilla forward to correct the malocclusion. Bilateral Sagittal Split Osteotomy, Genioplasty, and Mandibular setback surgery are not suitable in this case as they involve modifications to the mandible, which is normal in this patient.",
      choices: [
        {
          id: "c1",
          content: "Perform a Lefort I advancement",
          explanation: "Correct!",
          question_id: "q115",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Perform a Bilateral Sagittal Split Osteotomy",
          explanation: "Incorrect.",
          question_id: "q115",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Perform a Genioplasty",
          explanation: "Incorrect.",
          question_id: "q115",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Perform a Mandibular setback surgery",
          explanation: "Incorrect.",
          question_id: "q115",
          is_correct: false,
        },
      ],
    },
    {
      id: "q116",
      content:
        "Refer to the provided image of a dental model with missing teeth. The model exhibits missing one or two teeth on the right side, including a missing lateral and central incisor in the same quadrant. On the left side, the central incisor, lateral incisor, and canine are missing. Based on this information, which Kennedy classification does this dental model belong to?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "The Kennedy classification system is used to categorize partial edentulism, which is a condition where a patient is missing some, but not all, teeth. The system has four classes, with modifications for each class. In this case, the dental model fits the description of Kennedy Class III Modification 1, which is characterized by one edentulous area located between two remaining natural teeth in the same arch.",
      choices: [
        {
          id: "c1",
          content: "Kennedy Class II",
          explanation: "Incorrect.",
          question_id: "q116",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Kennedy Class II Modification 1",
          explanation: "Incorrect.",
          question_id: "q116",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Kennedy Class III Modification 1",
          explanation: "Correct!",
          question_id: "q116",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Kennedy Class IV Modification 1",
          explanation: "Incorrect.",
          question_id: "q116",
          is_correct: false,
        },
      ],
    },
    {
      id: "q117",
      content:
        "In a hypothetical scenario, an orthodontist enters a room where a consultant is discussing a patient's case with a general dentist. The general dentist suggests that multiple tooth extractions are necessary, but the consultant disagrees and insists on further investigation. In this situation, which ethical principle is potentially being violated?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In this scenario, the ethical principle potentially being violated is the violation of patient confidentiality. The orthodontist, who is not directly involved in the patient's care, is privy to the patient's medical information without their consent. This is a breach of the patient's right to privacy and confidentiality. The other options are distractors and do not apply to the situation described.",
      choices: [
        {
          id: "c1",
          content: "Defamation of a professional colleague",
          explanation: "Incorrect.",
          question_id: "q117",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Proposing an alternative treatment plan",
          explanation: "Incorrect.",
          question_id: "q117",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Inaction and passive observation",
          explanation: "Incorrect.",
          question_id: "q117",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Violation of patient confidentiality",
          explanation: "Correct!",
          question_id: "q117",
          is_correct: true,
        },
      ],
    },
    {
      id: "q118",
      content:
        "In orthodontics, if a force of 75 grams is applied, what is the approximate force needed to achieve tooth intrusion?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In orthodontics, tooth intrusion is typically achieved by applying a force that is equivalent to the force initially applied. Therefore, if a force of 75 grams is applied, the same force is needed to achieve tooth intrusion.",
      choices: [
        {
          id: "c1",
          content: "25 grams",
          explanation: "Incorrect.",
          question_id: "q118",
          is_correct: false,
        },
        {
          id: "c2",
          content: "50 grams",
          explanation: "Incorrect.",
          question_id: "q118",
          is_correct: false,
        },
        {
          id: "c3",
          content: "75 grams",
          explanation: "Correct!",
          question_id: "q118",
          is_correct: true,
        },
        {
          id: "c4",
          content: "100 grams",
          explanation: "Incorrect.",
          question_id: "q118",
          is_correct: false,
        },
      ],
    },
    {
      id: "q119",
      content:
        "What is the recommended minimum distance for placing a dental implant from the mental nerve?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The recommended minimum distance for placing a dental implant from the mental nerve is 5 mm anterior. This is to prevent nerve damage, which can lead to complications such as numbness, pain, or paresthesia.",
      choices: [
        {
          id: "c1",
          content: "5 mm anterior to the mental nerve",
          explanation: "Correct!",
          question_id: "q119",
          is_correct: true,
        },
        {
          id: "c2",
          content: "2 mm anterior to the mental nerve",
          explanation: "Incorrect.",
          question_id: "q119",
          is_correct: false,
        },
        {
          id: "c3",
          content: "2 mm posterior to the mental nerve",
          explanation: "Incorrect.",
          question_id: "q119",
          is_correct: false,
        },
        {
          id: "c4",
          content: "5 mm posterior to the mental nerve",
          explanation: "Incorrect.",
          question_id: "q119",
          is_correct: false,
        },
      ],
    },
    {
      id: "q120",
      content:
        "Which analgesic is considered safe to administer to a patient with a peptic ulcer?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Acetaminophen is the safest analgesic to administer to a patient with a peptic ulcer. Nonsteroidal anti-inflammatory drugs (NSAIDs) such as Ibuprofen, Naproxen, and Aspirin can exacerbate peptic ulcers by inhibiting the production of prostaglandins, which protect the stomach lining from the damaging effects of stomach acid.",
      choices: [
        {
          id: "c1",
          content: "Ibuprofen",
          explanation: "Incorrect.",
          question_id: "q120",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Naproxen",
          explanation: "Incorrect.",
          question_id: "q120",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Acetaminophen",
          explanation: "Correct!",
          question_id: "q120",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Aspirin",
          explanation: "Incorrect.",
          question_id: "q120",
          is_correct: false,
        },
      ],
    },
    {
      id: "q121",
      content:
        "Which analgesic is considered safe to administer to a patient with asthma?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Acetaminophen is considered safe to administer to a patient with asthma. Ibuprofen and Aspirin are nonsteroidal anti-inflammatory drugs (NSAIDs) which can potentially trigger asthma attacks in some individuals. Prednisone is a corticosteroid, not an analgesic.",
      choices: [
        {
          id: "c1",
          content: "Acetaminophen",
          explanation: "Correct!",
          question_id: "q121",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Ibuprofen",
          explanation: "Incorrect.",
          question_id: "q121",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Prednisone",
          explanation: "Incorrect.",
          question_id: "q121",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Aspirin",
          explanation: "Incorrect.",
          question_id: "q121",
          is_correct: false,
        },
      ],
    },
    {
      id: "q122",
      content:
        "How should you manage an asthmatic patient who exhibits anxiety and has a known allergy to diazepam?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Nitrous Oxide is a safe and effective sedative agent that is mixed with oxygen and inhaled through a small mask that fits over your nose. It is not intended to put you to sleep, but to help you relax. It is a good choice for an asthmatic patient who is anxious and allergic to diazepam, as it does not depress respiration. The other options are not suitable: administering diazepam despite the allergy could lead to a severe allergic reaction, not using any sedative might increase the patient's anxiety, and using a high dose of local anesthetic could lead to toxicity.",
      choices: [
        {
          id: "c1",
          content: "Administer Nitrous Oxide",
          explanation: "Correct!",
          question_id: "q122",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Administer Diazepam regardless of allergy",
          explanation: "Incorrect.",
          question_id: "q122",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Use no sedative and proceed with treatment",
          explanation: "Incorrect.",
          question_id: "q122",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Administer a high dose of local anesthetic",
          explanation: "Incorrect.",
          question_id: "q122",
          is_correct: false,
        },
      ],
    },
    {
      id: "q123",
      content:
        "Which type of rubber dam clamp is typically used for tooth number 14?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The W8 rubber dam clamp is typically used for molars, including tooth number 14. The other choices, 6A, 12A, and 214, are not typically used for this purpose in dentistry. The rubber dam clamp is an essential tool in many dental procedures as it helps to isolate the treatment area, preventing contamination and providing a clean and dry working environment.",
      choices: [
        {
          id: "c1",
          content: "W 8",
          explanation: "Correct!",
          question_id: "q123",
          is_correct: true,
        },
        {
          id: "c2",
          content: "6 A",
          explanation: "Incorrect.",
          question_id: "q123",
          is_correct: false,
        },
        {
          id: "c3",
          content: "12 A",
          explanation: "Incorrect.",
          question_id: "q123",
          is_correct: false,
        },
        {
          id: "c4",
          content: "214",
          explanation: "Incorrect.",
          question_id: "q123",
          is_correct: false,
        },
      ],
    },
    {
      id: "q124",
      content:
        "A patient presents with difficulty closing his eyes and difficulty closing his mouth, which remains mostly open. Which cranial nerve is likely to be injured or impaired in this case?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The symptoms described in the question are indicative of a facial nerve (Cranial Nerve VII) injury. The facial nerve controls the muscles of facial expression, and damage to this nerve can result in an inability to close the eyes or mouth. Cranial Nerve V (Trigeminal) is primarily responsible for facial sensation and mastication, Cranial Nerve VI (Abducens) controls lateral eye movement, and Cranial Nerve VIII (Vestibulocochlear) is involved in hearing and balance.",
      choices: [
        {
          id: "c1",
          content: "Cranial Nerve V (Trigeminal)",
          explanation: "Incorrect.",
          question_id: "q124",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Cranial Nerve VI (Abducens)",
          explanation: "Incorrect.",
          question_id: "q124",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Cranial Nerve VII (Facial)",
          explanation: "Correct!",
          question_id: "q124",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Cranial Nerve VIII (Vestibulocochlear)",
          explanation: "Incorrect.",
          question_id: "q124",
          is_correct: false,
        },
      ],
    },
    {
      id: "q125",
      content:
        "A patient presents with a facial injury from an accident, involving both eyes and the maxilla bilaterally. The involvement of the zygomatic bones is not mentioned. Which type of fracture does this scenario most likely represent?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The Le Fort II fracture, also known as a pyramidal fracture, is a facial fracture that involves the maxilla, nasal bones, lacrimal bones, and often the orbital floor. It is characterized by separation of the maxilla from the cranial base and the pterygoid plates. This type of fracture often results from a blow to the lower or mid maxilla. The patient's symptoms, which include injury to both eyes and the maxilla bilaterally, are consistent with a Le Fort II fracture. The other options, Le Fort I and III fractures and zygomatic fracture, do not match the patient's symptoms.",
      choices: [
        {
          id: "c1",
          content: "Le Fort I fracture",
          explanation: "Incorrect.",
          question_id: "q125",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Le Fort II fracture",
          explanation: "Correct!",
          question_id: "q125",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Le Fort III fracture",
          explanation: "Incorrect.",
          question_id: "q125",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Zygomatic fracture",
          explanation: "Incorrect.",
          question_id: "q125",
          is_correct: false,
        },
      ],
    },
    {
      id: "q126",
      content:
        "What is the calculation for D9 for a file size 30 with a taper of 0.04?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The calculation for D9 for a file size 30 with a taper of 0.04 is done by subtracting the taper from the file size. In this case, 30 (file size) - 0.04 (taper) * 9 (D9) = 0.44. Therefore, the correct answer is 0.44.",
      choices: [
        {
          id: "c1",
          content: "0.22",
          explanation: "Incorrect.",
          question_id: "q126",
          is_correct: false,
        },
        {
          id: "c2",
          content: "0.33",
          explanation: "Incorrect.",
          question_id: "q126",
          is_correct: false,
        },
        {
          id: "c3",
          content: "0.44",
          explanation: "Correct!",
          question_id: "q126",
          is_correct: true,
        },
        {
          id: "c4",
          content: "0.66",
          explanation: "Incorrect.",
          question_id: "q126",
          is_correct: false,
        },
      ],
    },
    {
      id: "q127",
      content:
        "In a clinical case where an impression is taken, but one side appears larger than the other, what could be the most likely reason for this discrepancy?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The most likely reason for one side of an impression appearing larger than the other is incorrect placement of the impression tray. The tray must be centered in the mouth to ensure an accurate impression. If the tray is placed incorrectly, it can lead to distortions in the impression, making one side appear larger than the other. Patient movement, use of expired material, or inadequate mixing could also cause distortions, but these are less likely to cause one side to appear larger than the other.",
      choices: [
        {
          id: "c1",
          content: "Incorrect placement of the impression tray",
          explanation: "Correct!",
          question_id: "q127",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Patient movement during impression taking",
          explanation: "Incorrect.",
          question_id: "q127",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Use of expired impression material",
          explanation: "Incorrect.",
          question_id: "q127",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Inadequate mixing of the impression material",
          explanation: "Incorrect.",
          question_id: "q127",
          is_correct: false,
        },
      ],
    },
    {
      id: "q129",
      content:
        "A patient presents with swelling under the eye. Given the location of the swelling, which anatomical space is most likely involved? Note: The question does not explicitly mention the canine space or the infraorbital region.",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "The infratemporal space is the most likely anatomical space involved when a patient presents with swelling under the eye. This space is located on each side of the skull, below the level of the eyes. It contains several important structures, including the lower part of the temporalis muscle, the lateral and medial pterygoid muscles, the maxillary artery and its branches, the pterygoid plexus of veins, and the mandibular nerve and its branches. Infections or inflammations in this space can cause swelling under the eye.",
      choices: [
        {
          id: "c1",
          content: "Infratemporal space",
          explanation: "Correct!",
          question_id: "q129",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Buccal space",
          explanation: "Incorrect.",
          question_id: "q129",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Submandibular space",
          explanation: "Incorrect.",
          question_id: "q129",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Pterygomandibular space",
          explanation: "Incorrect.",
          question_id: "q129",
          is_correct: false,
        },
      ],
    },
    {
      id: "q130",
      content:
        "A radiograph displays a patient with Hutchinson's Incisors. What is the most likely cause of this dental condition?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "Hutchinson's Incisors, characterized by notched incisors, is a dental sign of congenital syphilis. This condition is a result of the mother's syphilis infection being transmitted to the child during pregnancy. The other choices, Dental Fluorosis, Amelogenesis Imperfecta, and Dentinogenesis Imperfecta, are dental conditions but they do not result in Hutchinson's Incisors.",
      choices: [
        {
          id: "c1",
          content: "Congenital Syphilis",
          explanation: "Correct!",
          question_id: "q130",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Dental Fluorosis",
          explanation: "Incorrect.",
          question_id: "q130",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Amelogenesis Imperfecta",
          explanation: "Incorrect.",
          question_id: "q130",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Dentinogenesis Imperfecta",
          explanation: "Incorrect.",
          question_id: "q130",
          is_correct: false,
        },
      ],
    },
    {
      id: "q131",
      content:
        "In a case where a dentist with no experience performs an extraction of a third molar located close to the Inferior Alveolar Nerve (IAN) and causes injury, but still manages to extract the tooth, how would this situation be best classified?",
      category_id: "geography",
      image_url: "",
      explanation:
        "This case would be classified as professional negligence, also known as malpractice. The dentist performed a procedure that they were not adequately trained or experienced to perform, leading to injury. Even though the tooth was successfully extracted, the injury could have been avoided if the dentist had referred the patient to a more experienced professional. An unforeseen surgical complication would be an unexpected event that occurs despite the dentist having the necessary skills and taking all the appropriate precautions. A routine dental procedure would not typically result in injury, and an informed consent violation would involve the patient not being fully informed about the risks of the procedure.",
      choices: [
        {
          id: "c1",
          content: "Professional negligence",
          explanation: "Correct!",
          question_id: "q131",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Unforeseen surgical complication",
          explanation: "Incorrect.",
          question_id: "q131",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Routine dental procedure",
          explanation: "Incorrect.",
          question_id: "q131",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Informed consent violation",
          explanation: "Incorrect.",
          question_id: "q131",
          is_correct: false,
        },
      ],
    },
    {
      id: "q132",
      content:
        "What is the most appropriate course of action for a pediatric patient presenting with an ankylosed tooth?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Ankylosis is a condition where the tooth becomes fused to the bone, preventing it from erupting or moving. In pediatric patients, this can lead to problems with the development of the permanent dentition. The best course of action in such cases is to refer the patient to a specialist, such as a pediatric dentist or orthodontist, who can provide appropriate treatment.",
      choices: [
        {
          id: "c1",
          content: "Prescribe antibiotics and monitor the situation",
          explanation: "Incorrect.",
          question_id: "q132",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Perform a root canal treatment",
          explanation: "Incorrect.",
          question_id: "q132",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Refer the patient to a specialist",
          explanation: "Correct!",
          question_id: "q132",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Extract the tooth immediately",
          explanation: "Incorrect.",
          question_id: "q132",
          is_correct: false,
        },
      ],
    },
    {
      id: "q133",
      content:
        "What is the most appropriate course of action when pulp stones are identified in a patient?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Pulp stones are calcified masses that form within the pulp of a tooth. They are generally asymptomatic and are often discovered during routine radiographic examination. If pulp stones are causing discomfort or are associated with other dental issues, the patient may need to be referred to an endodontist for further evaluation and treatment. Antibiotics, tooth extraction, and dental cleaning are not typically the first line of action when dealing with pulp stones.",
      choices: [
        {
          id: "c1",
          content: "Refer the patient to an endodontist",
          explanation: "Correct!",
          question_id: "q133",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Prescribe antibiotics to the patient",
          explanation: "Incorrect.",
          question_id: "q133",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Perform a tooth extraction",
          explanation: "Incorrect.",
          question_id: "q133",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Recommend a dental cleaning",
          explanation: "Incorrect.",
          question_id: "q133",
          is_correct: false,
        },
      ],
    },
    {
      id: "q134",
      content:
        "In a clinical case where a tooth appears larger in size and radiographic examination reveals the presence of two pulp chambers, what dental condition could be inferred?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "Fusion is a dental condition that occurs when two tooth buds fuse together during development, resulting in a larger tooth with two pulp chambers. This condition can be confirmed through radiographic examination. Gemination, dens invaginatus, and dens evaginatus are other dental conditions, but they do not result in a larger tooth with two pulp chambers.",
      choices: [
        {
          id: "c1",
          content: "Fusion",
          explanation: "Correct!",
          question_id: "q134",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Gemination",
          explanation: "Incorrect.",
          question_id: "q134",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Dens invaginatus",
          explanation: "Incorrect.",
          question_id: "q134",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Dens evaginatus",
          explanation: "Incorrect.",
          question_id: "q134",
          is_correct: false,
        },
      ],
    },
    {
      id: "q135",
      content:
        "A patient presents with a bulge in a necrotic lower tooth. What is the most likely diagnosis?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Dens Evaginatus is a rare odontogenic developmental anomaly characterized by the presence of an extra cusp that protrudes from the occlusal or lingual surface of the tooth. It is often associated with pulp necrosis due to the thin enamel and dentin covering the extra cusp, which makes it susceptible to wear and tear, and subsequent exposure of the pulp. Dens Invaginatus, on the other hand, is characterized by the invagination of the crown or root that is lined by enamel. Dental Caries and Periodontal Abscess do not typically present as a bulge in the tooth.",
      choices: [
        {
          id: "c1",
          content: "Dens Invaginatus",
          explanation: "Incorrect.",
          question_id: "q135",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Dens Evaginatus",
          explanation: "Correct!",
          question_id: "q135",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Dental Caries",
          explanation: "Incorrect.",
          question_id: "q135",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Periodontal Abscess",
          explanation: "Incorrect.",
          question_id: "q135",
          is_correct: false,
        },
      ],
    },
    {
      id: "q136",
      content:
        "Which test is commonly used for the detection of Hepatitis B Virus (HBV)?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The Hepatitis B Surface Antigen (HBsAg) Test is commonly used for the detection of Hepatitis B Virus (HBV). It is the earliest indicator of acute hepatitis B and often identifies infected people before symptoms appear. The presence of HBsAg indicates that the person is infectious. The body normally produces antibodies to HBsAg as part of the normal immune response to infection.",
      choices: [
        {
          id: "c1",
          content: "Hepatitis C Virus (HCV) Antibody Test",
          explanation: "Incorrect.",
          question_id: "q136",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Hepatitis B Surface Antigen (HBsAg) Test",
          explanation: "Correct!",
          question_id: "q136",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Hepatitis A Virus (HAV) Antibody Test",
          explanation: "Incorrect.",
          question_id: "q136",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Hepatitis E Virus (HEV) Antibody Test",
          explanation: "Incorrect.",
          question_id: "q136",
          is_correct: false,
        },
      ],
    },
    {
      id: "q137",
      content:
        "A patient presents with a radiograph indicating a likely ameloblastoma. What would be the most appropriate next step in the management of this case?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "In the case of a suspected ameloblastoma, the next appropriate step would be to obtain a Cone Beam Computed Tomography (CBCT) scan. This would provide a three-dimensional view of the lesion, allowing for a more accurate assessment of its size, location, and relationship to surrounding structures. Fine needle aspiration is not typically the first choice in the management of ameloblastomas, as it may not provide sufficient information about the lesion. Immediate surgical removal without further imaging could potentially lead to incomplete removal or unnecessary damage to surrounding structures. Antibiotics would not be effective in treating a benign tumor such as an ameloblastoma.",
      choices: [
        {
          id: "c1",
          content: "Perform a fine needle aspiration",
          explanation: "Incorrect.",
          question_id: "q137",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Obtain a Cone Beam Computed Tomography (CBCT) scan",
          explanation: "Correct!",
          question_id: "q137",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Immediate surgical removal of the lesion",
          explanation: "Incorrect.",
          question_id: "q137",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Prescribe antibiotics and monitor the lesion",
          explanation: "Incorrect.",
          question_id: "q137",
          is_correct: false,
        },
      ],
    },
    {
      id: "q138",
      content:
        "Refer to the image of a Gracey's instrument, specifically the section from point A to B. What is this part of the instrument called?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "The part of the Gracey's instrument from point A to B, as shown in the image, is called the shank. The shank is the part of the instrument that connects the handle to the working end. The handle is the part that is held by the dentist, the cutting edge is the sharp edge used for cutting, and the blade tip is the end of the working part of the instrument.",
      choices: [
        {
          id: "c1",
          content: "Handle",
          explanation: "Incorrect.",
          question_id: "q138",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Shank",
          explanation: "Correct!",
          question_id: "q138",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Cutting Edge",
          explanation: "Incorrect.",
          question_id: "q138",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Blade Tip",
          explanation: "Incorrect.",
          question_id: "q138",
          is_correct: false,
        },
      ],
    },
    {
      id: "q139",
      content:
        "What is the recommended maximum level of bacterial contamination in dental unit waterlines, expressed in colony-forming units per milliliter (CFU/mL)?",
      category_id: "geography",
      image_url: "",
      explanation:
        "According to the Centers for Disease Control and Prevention (CDC), the recommended maximum level of bacterial contamination in dental unit waterlines is 500 colony-forming units per milliliter (CFU/mL). This is to ensure patient safety and prevent any potential infections.",
      choices: [
        {
          id: "c1",
          content: "500 CFU/mL",
          explanation: "Correct!",
          question_id: "q139",
          is_correct: true,
        },
        {
          id: "c2",
          content: "1000 CFU/mL",
          explanation: "Incorrect.",
          question_id: "q139",
          is_correct: false,
        },
        {
          id: "c3",
          content: "1500 CFU/mL",
          explanation: "Incorrect.",
          question_id: "q139",
          is_correct: false,
        },
        {
          id: "c4",
          content: "2000 CFU/mL",
          explanation: "Incorrect.",
          question_id: "q139",
          is_correct: false,
        },
      ],
    },
    {
      id: "q140",
      content:
        "A patient presents with joint pain in multiple locations of the body. Based on this symptom, which condition might the patient be suffering from, given that laboratory tests have been provided?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The patient's symptoms of joint pain in multiple locations of the body, along with the mention of laboratory tests, suggest Rheumatoid arthritis. Rheumatoid arthritis is a chronic inflammatory disorder that can affect more than just your joints. In some people, the condition can damage a wide variety of body systems, including the skin, eyes, lungs, heart and blood vessels. It is diagnosed through a combination of physical examination and laboratory tests.",
      choices: [
        {
          id: "c1",
          content: "Rheumatoid arthritis",
          explanation: "Correct!",
          question_id: "q140",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Osteoarthritis",
          explanation: "Incorrect.",
          question_id: "q140",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Fibromyalgia",
          explanation: "Incorrect.",
          question_id: "q140",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Gout",
          explanation: "Incorrect.",
          question_id: "q140",
          is_correct: false,
        },
      ],
    },
    {
      id: "q141",
      content:
        "Which type of dental condition is often referred to as 'the pink tooth of Mummery'?",
      category_id: "geography",
      image_url: "",
      explanation:
        "'The pink tooth of Mummery' is a term used to describe a tooth that has undergone internal resorption. This condition occurs when the body starts to break down and absorb the dentin and pulp of the tooth from the inside. It is often caused by trauma or inflammation. The tooth appears pink because the resorbing tissue is vascular and shows through the translucent enamel.",
      choices: [
        {
          id: "c1",
          content: "Necrotic pulp",
          explanation: "Incorrect.",
          question_id: "q141",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Internal resorption",
          explanation: "Correct!",
          question_id: "q141",
          is_correct: true,
        },
        {
          id: "c3",
          content: "External resorption",
          explanation: "Incorrect.",
          question_id: "q141",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Pulpal calcification",
          explanation: "Incorrect.",
          question_id: "q141",
          is_correct: false,
        },
      ],
    },
    {
      id: "q142",
      content:
        "Which term best describes a fracture of a tooth that involves the cementum, dentin, and pulp?",
      category_id: "geography",
      image_url: "",
      explanation:
        "A complicated root fracture refers to a fracture that involves the cementum, dentin, and pulp of a tooth. This type of fracture is considered 'complicated' because it affects multiple layers of the tooth, including the pulp, which is the innermost part of the tooth. This is in contrast to an uncomplicated root fracture, which does not involve the pulp.",
      choices: [
        {
          id: "c1",
          content: "Complicated crown fracture",
          explanation: "Incorrect.",
          question_id: "q142",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Uncomplicated crown fracture",
          explanation: "Incorrect.",
          question_id: "q142",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Complicated root fracture",
          explanation: "Correct!",
          question_id: "q142",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Uncomplicated root fracture",
          explanation: "Incorrect.",
          question_id: "q142",
          is_correct: false,
        },
      ],
    },
    {
      id: "q143",
      content:
        "During the irrigation of a patient's root canal, the patient suddenly experiences severe pain. What could be the possible cause of this sudden pain?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The sudden severe pain during root canal irrigation could be due to an accidental overuse of Sodium Hypochlorite. Sodium Hypochlorite is a common irrigant used in root canal therapy, but if used excessively or improperly, it can cause severe pain and tissue damage. Perforation of the root canal and endodontic flare-up are also possible causes of pain during root canal therapy, but they usually do not cause sudden severe pain during irrigation.",
      choices: [
        {
          id: "c1",
          content: "Perforation of the root canal",
          explanation: "Incorrect.",
          question_id: "q143",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Endodontic flare-up",
          explanation: "Incorrect.",
          question_id: "q143",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Accidental overuse of Sodium Hypochlorite",
          explanation: "Correct!",
          question_id: "q143",
          is_correct: true,
        },
      ],
    },
    {
      id: "q144",
      content:
        "In a hypothetical scenario, a patient appears to be lost and seeking directions within a dental facility. If you, as a dental professional, pass by this individual without offering assistance, which ethical principle is being violated?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The ethical principle of beneficence refers to doing good and avoiding harm to patients. This includes not only physical harm, but also emotional and psychological harm. By not assisting a lost patient, the dental professional is failing to do good and potentially causing emotional distress, thus violating the principle of beneficence.",
      choices: [
        {
          id: "c1",
          content: "Justice - treating patients fairly and impartially",
          explanation: "Incorrect.",
          question_id: "q144",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Beneficence - doing good and avoiding harm to patients",
          explanation: "Correct!",
          question_id: "q144",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Non-maleficence - not causing harm to patients",
          explanation: "Incorrect.",
          question_id: "q144",
          is_correct: false,
        },
        {
          id: "c4",
          content:
            "Autonomy - respecting the patient's rights to make their own decisions",
          explanation: "Incorrect.",
          question_id: "q144",
          is_correct: false,
        },
      ],
    },
    {
      id: "q145",
      content:
        "A pediatric patient presents with a moon face, a hump on the back, and an enlarged abdomen that appears disproportionate for his age. What is the most likely cause of these symptoms?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The symptoms described - moon face, back hump, and enlarged abdomen - are characteristic of Cushing's syndrome, a condition caused by prolonged exposure to high levels of cortisol, also known as corticosteroids. Growth hormone deficiency, hyperthyroidism, and diabetes mellitus do not typically present with these specific symptoms.",
      choices: [
        {
          id: "c1",
          content: "Excessive corticosteroids",
          explanation: "Correct!",
          question_id: "q145",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Growth hormone deficiency",
          explanation: "Incorrect.",
          question_id: "q145",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Hyperthyroidism",
          explanation: "Incorrect.",
          question_id: "q145",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Diabetes mellitus",
          explanation: "Incorrect.",
          question_id: "q145",
          is_correct: false,
        },
      ],
    },
    {
      id: "q146",
      content:
        "After a dentist has extracted a tooth and wishes to preserve it, what is the most appropriate method to prepare the tooth for storage?",
      category_id: "geography",
      image_url: "",
      explanation:
        "After a tooth extraction, if the dentist wishes to preserve the tooth, a high-level disinfection is the most appropriate method. This process will effectively kill or inactivate all vegetative bacteria, mycobacteria, fungi, and viruses. Low-level disinfection, washing with water, or dry heat sterilization would not be sufficient to ensure the tooth is safe for handling and storage.",
      choices: [
        {
          id: "c1",
          content: "Simply wash it with water",
          explanation: "Incorrect.",
          question_id: "q146",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Perform a low-level disinfection",
          explanation: "Incorrect.",
          question_id: "q146",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Perform a high-level disinfection",
          explanation: "Correct!",
          question_id: "q146",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Use dry heat sterilization",
          explanation: "Incorrect.",
          question_id: "q146",
          is_correct: false,
        },
      ],
    },
    {
      id: "q147",
      content:
        "Which type of dental trauma results in a tooth appearing larger, higher, or longer than the surrounding teeth?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Extrusion refers to a type of dental trauma where the tooth is partially dislodged from its socket, making it appear larger, higher, or longer than the surrounding teeth. Intrusion is the opposite, where the tooth is driven into the alveolar bone. Subluxation refers to a tooth that is mobile but not displaced, and lateral luxation refers to the displacement of a tooth in a direction other than axially.",
      choices: [
        {
          id: "c1",
          content: "Intrusion",
          explanation: "Incorrect.",
          question_id: "q147",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Extrusion",
          explanation: "Correct!",
          question_id: "q147",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Subluxation",
          explanation: "Incorrect.",
          question_id: "q147",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Lateral luxation",
          explanation: "Incorrect.",
          question_id: "q147",
          is_correct: false,
        },
      ],
    },
    {
      id: "q148",
      content:
        "What is the risk level associated with dental implant placement in a patient undergoing radiotherapy?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Patients undergoing radiotherapy are at a high risk when it comes to dental implant placement. This is due to the fact that radiotherapy can cause damage to the bone and soft tissues, leading to a higher risk of implant failure and complications such as osteoradionecrosis. Therefore, careful planning and consideration is required when considering dental implants for patients undergoing radiotherapy.",
      choices: [
        {
          id: "c1",
          content: "Low risk",
          explanation: "Incorrect.",
          question_id: "q148",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Moderate risk",
          explanation: "Incorrect.",
          question_id: "q148",
          is_correct: false,
        },
        {
          id: "c3",
          content: "High risk",
          explanation: "Correct!",
          question_id: "q148",
          is_correct: true,
        },
        {
          id: "c4",
          content: "No effect on risk level",
          explanation: "Incorrect.",
          question_id: "q148",
          is_correct: false,
        },
      ],
    },
    {
      id: "q149",
      content:
        "What is the recommended minimum distance between a dental implant and natural teeth?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The recommended minimum distance between a dental implant and natural teeth is 2 millimeters. This is to ensure that there is enough space for the biological width and to prevent any potential damage to the periodontal ligament and the alveolar bone of the adjacent tooth.",
      choices: [
        {
          id: "c1",
          content: "0.5 millimeters",
          explanation: "Incorrect.",
          question_id: "q149",
          is_correct: false,
        },
        {
          id: "c2",
          content: "1 millimeter",
          explanation: "Incorrect.",
          question_id: "q149",
          is_correct: false,
        },
        {
          id: "c3",
          content: "1.5 millimeters",
          explanation: "Incorrect.",
          question_id: "q149",
          is_correct: false,
        },
        {
          id: "c4",
          content: "2 millimeters",
          explanation: "Correct!",
          question_id: "q149",
          is_correct: true,
        },
      ],
    },
    {
      id: "q150",
      content:
        "How should a dental professional manage a patient with a history of tuberculosis who presents with dental pain, regardless of whether the tuberculosis is active, stable, or occurred several years ago?",
      category_id: "geography",
      image_url: "",
      explanation:
        "When treating a patient with a history of tuberculosis, regardless of the status of the disease, dental professionals should utilize a filtration mask during treatment. This is to prevent the potential spread of the disease, as tuberculosis is airborne and can be spread through respiratory droplets. Treating the patient in an isolated room is not necessary unless the tuberculosis is active and contagious. Prescribing antibiotics before initiating treatment is not a standard protocol for tuberculosis patients. Postponing treatment until tuberculosis is completely cured is not necessary and could lead to worsening of the dental condition.",
      choices: [
        {
          id: "c1",
          content: "Utilize a filtration mask during treatment",
          explanation: "Correct!",
          question_id: "q150",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Treat the patient in an isolated room",
          explanation: "Incorrect.",
          question_id: "q150",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Prescribe antibiotics before initiating treatment",
          explanation: "Incorrect.",
          question_id: "q150",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Postpone treatment until tuberculosis is completely cured",
          explanation: "Incorrect.",
          question_id: "q150",
          is_correct: false,
        },
      ],
    },
    {
      id: "q151",
      content:
        "In a pediatric case where a child presents with poor oral hygiene, multiple dental caries, and numerous body bruises, what type of maltreatment is the child likely experiencing?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The child's poor oral health, indicated by multiple dental caries, suggests neglect, as it implies a lack of proper care and attention to the child's oral hygiene. The presence of numerous body bruises suggests physical abuse. Therefore, the child is likely experiencing both neglect and physical abuse.",
      choices: [
        {
          id: "c1",
          content: "Physical abuse only",
          explanation: "Incorrect.",
          question_id: "q151",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Neglect only",
          explanation: "Incorrect.",
          question_id: "q151",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Both neglect and physical abuse",
          explanation: "Correct!",
          question_id: "q151",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Neither neglect nor physical abuse",
          explanation: "Incorrect.",
          question_id: "q151",
          is_correct: false,
        },
      ],
    },
    {
      id: "q152",
      content:
        "Which of the following procedures should be performed prior to taking a biopsy in dentistry?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Before taking a biopsy, it is important to perform an aspiration, specifically a Fine Needle Aspiration (FNA). This procedure is done to obtain a sample of cells from a suspicious area, which can then be examined under a microscope. A CBCT scan, while useful in many dental procedures, is not typically performed prior to a biopsy. Root canal treatment and local anesthetic administration are not necessary before a biopsy.",
      choices: [
        {
          id: "c1",
          content: "Performing a root canal treatment",
          explanation: "Incorrect.",
          question_id: "q152",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Conducting a Cone Beam Computed Tomography (CBCT) scan",
          explanation: "Incorrect.",
          question_id: "q152",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Administering a local anesthetic",
          explanation: "Incorrect.",
          question_id: "q152",
          is_correct: false,
        },
        {
          id: "c4",
          content:
            "Performing an aspiration, specifically a Fine Needle Aspiration (FNA)",
          explanation: "Correct!",
          question_id: "q152",
          is_correct: true,
        },
      ],
    },
    {
      id: "q153",
      content:
        "Which of the following substances is most likely to induce an adrenal crisis in susceptible individuals?",
      category_id: "geography",
      image_url: "",
      explanation:
        "An adrenal crisis is a severe life-threatening condition that can occur in people with adrenal insufficiency. It is most commonly triggered by physical stress. Epinephrine, also known as adrenaline, can potentially induce an adrenal crisis in susceptible individuals due to its stimulating effect on the adrenal glands. Lidocaine and Procaine are local anesthetics and are not typically associated with inducing an adrenal crisis.",
      choices: [
        {
          id: "c1",
          content: "Lidocaine",
          explanation: "Incorrect.",
          question_id: "q153",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Procaine",
          explanation: "Incorrect.",
          question_id: "q153",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Epinephrine",
          explanation: "Correct!",
          question_id: "q153",
          is_correct: true,
        },
        {
          id: "c4",
          content: "None of the above",
          explanation: "Incorrect.",
          question_id: "q153",
          is_correct: false,
        },
      ],
    },
    {
      id: "q154",
      content:
        "How does the behavior of overprotective parents influence a child's behavior in the context of dental health?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Overprotective parents can inadvertently lead to worsening dental health behavior in children. This is because the child may not develop the necessary independence and responsibility for their own dental health, relying too heavily on their parents. The child may also develop a fear or anxiety around dental health due to the parents' overprotectiveness.",
      choices: [
        {
          id: "c1",
          content: "Promotes positive dental health behavior",
          explanation: "Incorrect.",
          question_id: "q154",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Leads to worsening dental health behavior",
          explanation: "Correct!",
          question_id: "q154",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Does not influence the child's dental health behavior",
          explanation: "Incorrect.",
          question_id: "q154",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Leads to inconsistent dental health behavior",
          explanation: "Incorrect.",
          question_id: "q154",
          is_correct: false,
        },
      ],
    },
    {
      id: "q155",
      content:
        "In a prosthodontics case where a patient has lost both upper canines (tooth numbers 13 and 23) and a three-unit fixed partial denture is planned, what should be the primary consideration?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In prosthodontics, Ante's law refers to the principle that the combined pericemental area of the abutment teeth should equal or surpass that of the teeth being replaced. In this case, the loss of both upper canines (13 and 23) and the planning of a three-unit fixed partial denture would require consideration of maxillary occlusion with potential violation of Ante's law. This is because the remaining teeth may not provide sufficient support for the prosthesis, leading to potential complications.",
      choices: [
        {
          id: "c1",
          content:
            "Consideration of maxillary occlusion with potential violation of Ante's law",
          explanation: "Correct!",
          question_id: "q155",
          is_correct: true,
        },
        {
          id: "c2",
          content:
            "Consideration of mandibular occlusion with potential violation of Ante's law",
          explanation: "Incorrect.",
          question_id: "q155",
          is_correct: false,
        },
        {
          id: "c3",
          content:
            "Consideration of maxillary occlusion without regard to Ante's law",
          explanation: "Incorrect.",
          question_id: "q155",
          is_correct: false,
        },
        {
          id: "c4",
          content:
            "Consideration of mandibular occlusion without regard to Ante's law",
          explanation: "Incorrect.",
          question_id: "q155",
          is_correct: false,
        },
      ],
    },
    {
      id: "q157",
      content:
        "In a prosthodontics case where a patient has a missing tooth and does not wish to undergo any bone grafting or regeneration procedures, which treatment option would be most suitable, depending on the severity of bone loss?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In a case where a patient has a missing tooth and does not wish to undergo any bone grafting or regeneration procedures, a Maryland Fixed Partial Denture (FPD) would be the most suitable treatment option. This is because a Maryland FPD is a conservative option that does not require bone grafting or regeneration. It is a type of bridge that is bonded to the back of the adjacent teeth, which makes it a good option for patients who do not want to undergo invasive procedures. The other options, such as a conventional or sectional RPD, may require more extensive preparation and may not be suitable for patients with severe bone loss. An implant supported denture would require bone grafting, which the patient does not want.",
      choices: [
        {
          id: "c1",
          content: "A. Maryland Fixed Partial Denture (FPD)",
          explanation: "Correct!",
          question_id: "q157",
          is_correct: true,
        },
        {
          id: "c2",
          content: "B. Conventional Removable Partial Denture (RPD)",
          explanation: "Incorrect.",
          question_id: "q157",
          is_correct: false,
        },
        {
          id: "c3",
          content: "C. Sectional Removable Partial Denture (RPD)",
          explanation: "Incorrect.",
          question_id: "q157",
          is_correct: false,
        },
        {
          id: "c4",
          content: "D. Implant Supported Denture",
          explanation: "Incorrect.",
          question_id: "q157",
          is_correct: false,
        },
      ],
    },
    {
      id: "q158",
      content:
        "In a prosthodontics case, a patient with a missing tooth (presumably tooth #12) is reluctant to undergo extensive treatment. What would be the most suitable treatment option for this patient?",
      category_id: "geography",
      image_url: "",
      explanation:
        "A Maryland Fixed Partial Denture (FPD) is a conservative treatment option for a patient who is missing a single tooth and does not wish to undergo extensive treatment. It requires minimal tooth reduction and is less invasive than other options. A Conventional Removable Partial Denture (RPD) and Sectional RPD are more complex and may not be suitable for a patient who is reluctant to undergo extensive treatment. A Dental Implant, while a good long-term solution, is a surgical procedure and may not be preferred by a patient who is averse to extensive treatment.",
      choices: [
        {
          id: "c1",
          content: "Maryland Fixed Partial Denture",
          explanation: "Correct!",
          question_id: "q158",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Conventional Removable Partial Denture",
          explanation: "Incorrect.",
          question_id: "q158",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Sectional Removable Partial Denture",
          explanation: "Incorrect.",
          question_id: "q158",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Dental Implant",
          explanation: "Incorrect.",
          question_id: "q158",
          is_correct: false,
        },
      ],
    },
    {
      id: "q159",
      content:
        "In a case where a single tooth is missing and there is available intra-arch space with potentially intact bones, what would be the best treatment option?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In a case where a single tooth is missing and there is available intra-arch space with potentially intact bones, a dental implant would be the best treatment option. Dental implants are a popular and effective long-term solution for people who suffer from missing teeth, failing teeth or chronic dental problems. They are artificial tooth roots, similar in shape to screws. When dental implants are placed in your jawbone, they bond with your natural bone. They become a sturdy base for supporting one or more artificial teeth, called crowns. The other options, such as Fixed Partial Denture (FPD), Conventional Removable Partial Denture (RPD), and Sectional Removable Partial Denture (RPD) are less ideal as they may require alteration of the surrounding teeth and may not provide as stable or natural a solution as an implant.",
      choices: [
        {
          id: "c1",
          content: "Fixed Partial Denture (FPD)",
          explanation: "Incorrect.",
          question_id: "q159",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Conventional Removable Partial Denture (RPD)",
          explanation: "Incorrect.",
          question_id: "q159",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Sectional Removable Partial Denture (RPD)",
          explanation: "Incorrect.",
          question_id: "q159",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Dental Implant",
          explanation: "Correct!",
          question_id: "q159",
          is_correct: true,
        },
      ],
    },
    {
      id: "q160",
      content:
        "In a case where a dentist performed a coronectomy, extracting only the coronal part of a third molar and causing some bone destruction in the process, why might the dentist have chosen to leave the roots in place?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "In a coronectomy, the dentist may choose to leave the roots of a tooth in place to avoid damaging the inferior alveolar nerve, which can be closely associated with the roots of the lower third molars. Damage to this nerve can result in numbness or altered sensation in the lower lip, tongue, and chin. The other options are distractors and do not accurately represent the primary reason for leaving the roots in place during a coronectomy.",
      choices: [
        {
          id: "c1",
          content: "To promote bone formation around the roots for recovery",
          explanation: "Incorrect.",
          question_id: "q160",
          is_correct: false,
        },
        {
          id: "c2",
          content: "To avoid damaging the inferior alveolar nerve",
          explanation: "Correct!",
          question_id: "q160",
          is_correct: true,
        },
        {
          id: "c3",
          content: "To prevent the need for a future root canal treatment",
          explanation: "Incorrect.",
          question_id: "q160",
          is_correct: false,
        },
        {
          id: "c4",
          content: "To reduce the risk of dry socket",
          explanation: "Incorrect.",
          question_id: "q160",
          is_correct: false,
        },
      ],
    },
    {
      id: "q161",
      content:
        "A patient presents with pain from a procedure performed three days ago. A photograph is provided, showing a graft done on the palate part close to the teeth. What is the correct name for this surgical procedure?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "The photograph shows a graft done on the palate part close to the teeth. This is typically indicative of a Connective Tissue Graft. This procedure is often used to cover exposed roots or to augment the gingiva in areas of recession. The graft is usually taken from the palate and transplanted to the area of recession. The patient's pain is likely due to the recent nature of the procedure.",
      choices: [
        {
          id: "c1",
          content: "Gingival Tissue Graft",
          explanation: "Incorrect.",
          question_id: "q161",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Connective Tissue Graft",
          explanation: "Correct!",
          question_id: "q161",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Free Gingival Graft",
          explanation: "Incorrect.",
          question_id: "q161",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Subepithelial Connective Tissue Graft",
          explanation: "Incorrect.",
          question_id: "q161",
          is_correct: false,
        },
      ],
    },
    {
      id: "q162",
      content:
        "In a hypothetical ethical case, a dentist explains to a patient the surgical procedure of extracting a third molar and the associated risks, including potential damage to the Inferior Alveolar Nerve (IAN). Which ethical principle best describes the dentist's actions?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The ethical principle of 'Autonomy' is best described in this scenario. Autonomy refers to the patient's right to make informed decisions about their treatment. In this case, the dentist is providing all the necessary information about the procedure and its risks, including potential damage to the Inferior Alveolar Nerve (IAN), thereby respecting the patient's autonomy.",
      choices: [
        {
          id: "c1",
          content: "Veracity",
          explanation: "Incorrect.",
          question_id: "q162",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Autonomy",
          explanation: "Correct!",
          question_id: "q162",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Beneficence",
          explanation: "Incorrect.",
          question_id: "q162",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Non-maleficence",
          explanation: "Incorrect.",
          question_id: "q162",
          is_correct: false,
        },
      ],
    },
    {
      id: "q164",
      content:
        "A patient who is currently on a regimen of prednisone has presented for a minor surgical procedure. How should the patient's prednisone dosage be managed in this situation?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In patients who are on long-term corticosteroid therapy, such as prednisone, it is generally recommended to maintain the current dosage and administer it 1 hour before the surgical procedure. This is to prevent adrenal insufficiency during the stress of surgery. Doubling the dose or significantly increasing it can lead to unnecessary side effects and complications. Therefore, the best management in this case is to keep the same dose 1 hour before surgery.",
      choices: [
        {
          id: "c1",
          content:
            "Administer 100 mg of prednisone 7 days prior to the surgery",
          explanation: "Incorrect.",
          question_id: "q164",
          is_correct: false,
        },
        {
          id: "c2",
          content:
            "Maintain the current dosage, administered 1 hour before the surgical procedure",
          explanation: "Correct!",
          question_id: "q164",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Double the current dosage during the surgical procedure",
          explanation: "Incorrect.",
          question_id: "q164",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Administer 200 mg of prednisone",
          explanation: "Incorrect.",
          question_id: "q164",
          is_correct: false,
        },
      ],
    },
    {
      id: "q165",
      content:
        "In a prosthodontics case, a patient reported experiencing pain upon occlusion, clicking sounds, and general discomfort. What could be the probable cause of these symptoms?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The symptoms described by the patient - pain on occlusion, clicking sounds, and discomfort - are indicative of an excessive vertical dimension of occlusion. This occurs when the space between the upper and lower jaws when the mouth is closed is greater than normal, causing the jaws to overextend and leading to discomfort and other symptoms. Decreased vertical dimension, improper alignment, and faulty material would present with different symptoms.",
      choices: [
        {
          id: "c1",
          content: "Excessive vertical dimension of occlusion",
          explanation: "Correct!",
          question_id: "q165",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Decreased vertical dimension of occlusion",
          explanation: "Incorrect.",
          question_id: "q165",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Improper alignment of prosthetic teeth",
          explanation: "Incorrect.",
          question_id: "q165",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Faulty prosthetic material",
          explanation: "Incorrect.",
          question_id: "q165",
          is_correct: false,
        },
      ],
    },
    {
      id: "q166",
      content:
        "In a prosthodontics case, the dentist observed wrinkles and a decrease in facial height. What could be the potential cause of these observations?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Decreased vertical dimension of occlusion can lead to a decrease in facial height and the appearance of wrinkles. This is because the vertical dimension of occlusion refers to the distance between two points when the occluding surfaces are in contact. When this dimension decreases, it can lead to a reduction in facial height and the appearance of wrinkles.",
      choices: [
        {
          id: "c1",
          content: "Excessive vertical dimension of occlusion",
          explanation: "Incorrect.",
          question_id: "q166",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Decreased vertical dimension of occlusion",
          explanation: "Correct!",
          question_id: "q166",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Inadequate prosthetic design",
          explanation: "Incorrect.",
          question_id: "q166",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Improper tooth alignment",
          explanation: "Incorrect.",
          question_id: "q166",
          is_correct: false,
        },
      ],
    },
    {
      id: "q167",
      content:
        "In a patient diagnosed with Hemophilia A, which coagulation test would be most indicative of the condition?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Hemophilia A is a bleeding disorder caused by a deficiency of Factor VIII, which is part of the intrinsic pathway of the coagulation cascade. The Partial Thromboplastin Time (PTT) test measures the efficiency of the intrinsic and common pathways of coagulation, thus it would be prolonged in Hemophilia A. Prothrombin Time (PT) measures the extrinsic pathway and is not affected in Hemophilia A. Bleeding Time (BT) and Activated Clotting Time (ACT) are not specific to Hemophilia A.",
      choices: [
        {
          id: "c1",
          content: "Prothrombin Time (PT)",
          explanation: "Incorrect.",
          question_id: "q167",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Partial Thromboplastin Time (PTT)",
          explanation: "Correct!",
          question_id: "q167",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Bleeding Time (BT)",
          explanation: "Incorrect.",
          question_id: "q167",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Activated Clotting Time (ACT)",
          explanation: "Incorrect.",
          question_id: "q167",
          is_correct: false,
        },
      ],
    },
    {
      id: "q168",
      content: "What determines the path of insertion for a denture?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The path of insertion for a denture is determined by the guiding plane. The guiding plane is a two-dimensional surface that directs the path of placement and removal of a removable dental prosthesis. It is the surface or surfaces of a tooth or teeth that makes contact with or guides a removable prosthesis (partial or complete denture) along a path during its placement and removal.",
      choices: [
        {
          id: "c1",
          content: "Rests",
          explanation: "Incorrect.",
          question_id: "q168",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Guiding plane",
          explanation: "Correct!",
          question_id: "q168",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Denture base",
          explanation: "Incorrect.",
          question_id: "q168",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Occlusal plane",
          explanation: "Incorrect.",
          question_id: "q168",
          is_correct: false,
        },
      ],
    },
    {
      id: "q169",
      content:
        "For a pediatric patient with a thumb-sucking habit, which appliance would be most suitable for this case?",
      category_id: "geography",
      image_url: "",
      explanation:
        "A palatal crib is the most suitable appliance for a pediatric patient with a thumb-sucking habit. This appliance is designed to act as a physical barrier that prevents the thumb from reaching the palate, thereby discouraging the habit. The other choices, such as fixed space maintainer, removable space maintainer, and distal shoe appliance, are typically used for maintaining space following premature loss of primary teeth and are not designed to address thumb-sucking habits.",
      choices: [
        {
          id: "c1",
          content: "Palatal crib",
          explanation: "Correct!",
          question_id: "q169",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Fixed space maintainer",
          explanation: "Incorrect.",
          question_id: "q169",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Removable space maintainer",
          explanation: "Incorrect.",
          question_id: "q169",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Distal shoe appliance",
          explanation: "Incorrect.",
          question_id: "q169",
          is_correct: false,
        },
      ],
    },
    {
      id: "q170",
      content:
        "What is the term for the line that appears on the cheek at the level of occlusion in a healthy patient?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Linea alba is a horizontal streak on the inner surface of the cheek, level with the biting plane. It appears as a white line. It is most prominent in individuals with a high degree of clenching activity or bruxism. The other terms, Linea nigra, Linea aspera, and Linea semilunaris, are not related to oral anatomy.",
      choices: [
        {
          id: "c1",
          content: "Linea alba",
          explanation: "Correct!",
          question_id: "q170",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Linea nigra",
          explanation: "Incorrect.",
          question_id: "q170",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Linea aspera",
          explanation: "Incorrect.",
          question_id: "q170",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Linea semilunaris",
          explanation: "Incorrect.",
          question_id: "q170",
          is_correct: false,
        },
      ],
    },
    {
      id: "q171",
      content:
        "In a case of dental trauma resulting in pinpoint pulp exposure for a duration of 30 to 40 minutes, what would be the most appropriate treatment?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In cases of dental trauma resulting in pinpoint pulp exposure, the most appropriate treatment is direct pulp capping. This procedure involves placing a protective dressing over the exposed pulp to preserve pulp vitality and promote healing. Pulpotomy, root canal treatment, and extraction are more invasive procedures that are typically reserved for cases where the pulp is irreversibly inflamed or necrotic.",
      choices: [
        {
          id: "c1",
          content: "Direct pulp capping",
          explanation: "Correct!",
          question_id: "q171",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Pulpotomy",
          explanation: "Incorrect.",
          question_id: "q171",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Root canal treatment",
          explanation: "Incorrect.",
          question_id: "q171",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Extraction",
          explanation: "Incorrect.",
          question_id: "q171",
          is_correct: false,
        },
      ],
    },
    {
      id: "q172",
      content:
        "In a case of dental trauma where the pulp has been exposed for 3 hours, what is the most appropriate treatment?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In a case of dental trauma where the pulp has been exposed for 3 hours, the most appropriate treatment is direct pulp capping. This procedure involves placing a protective dressing over the exposed pulp to allow it to heal and maintain its vitality. Pulpotomy and pulpectomy are more invasive procedures that involve the removal of part or all of the pulp, and are typically reserved for cases where the pulp is irreversibly inflamed or necrotic. Root canal treatment is also a more invasive procedure that is typically reserved for cases where the pulp is necrotic or the tooth has an apical periodontitis.",
      choices: [
        {
          id: "c1",
          content: "Direct pulp capping",
          explanation: "Correct!",
          question_id: "q172",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Pulpotomy",
          explanation: "Incorrect.",
          question_id: "q172",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Pulpectomy",
          explanation: "Incorrect.",
          question_id: "q172",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Root canal treatment",
          explanation: "Incorrect.",
          question_id: "q172",
          is_correct: false,
        },
      ],
    },
    {
      id: "q173",
      content:
        "In an orthodontic situation where the wire is causing irritation and ulceration to the patient, but the patient has an upcoming appointment with the orthodontist, what is the most appropriate course of action?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In a situation where the orthodontic wire is causing discomfort and ulceration, the best immediate solution is to apply dental wax to the wire where it contacts the tooth. This will provide a barrier between the wire and the oral tissues, reducing irritation and allowing the ulceration to heal. Cutting the wire could potentially lead to other complications, such as the wire becoming dislodged or causing further injury. It is also not advisable to ignore the discomfort or to rely solely on pain management, as this does not address the root cause of the problem.",
      choices: [
        {
          id: "c1",
          content: "Cut the wire at the point of irritation",
          explanation: "Incorrect.",
          question_id: "q173",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Apply wax to the wire where it contacts the tooth",
          explanation: "Correct!",
          question_id: "q173",
          is_correct: true,
        },
        {
          id: "c3",
          content:
            "Advise the patient to ignore the discomfort until the appointment",
          explanation: "Incorrect.",
          question_id: "q173",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Prescribe an analgesic to manage the pain",
          explanation: "Incorrect.",
          question_id: "q173",
          is_correct: false,
        },
      ],
    },
    {
      id: "q174",
      content:
        "A patient presents three days after beginning orthodontic treatment and complains of pain. What is the most appropriate management strategy?",
      category_id: "geography",
      image_url: "",
      explanation:
        "It is common for patients to experience some level of discomfort or pain a few days after the initiation of orthodontic treatment. This is due to the pressure exerted on the teeth by the orthodontic appliances, which causes inflammation and discomfort. The pain usually subsides after a few days as the patient's mouth adjusts to the appliances. Therefore, the most appropriate management strategy is to reassure the patient that this is normal and suggest over-the-counter pain relievers if necessary.",
      choices: [
        {
          id: "c1",
          content:
            "Reassure the patient that mild discomfort is normal following the initiation of orthodontic treatment",
          explanation: "Correct!",
          question_id: "q174",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Immediately remove the orthodontic appliances",
          explanation: "Incorrect.",
          question_id: "q174",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Prescribe a course of antibiotics",
          explanation: "Incorrect.",
          question_id: "q174",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Refer the patient to an oral surgeon",
          explanation: "Incorrect.",
          question_id: "q174",
          is_correct: false,
        },
      ],
    },
    {
      id: "q175",
      content:
        "A patient presents with unilateral swelling under his jaw. What would be the most appropriate management approach?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "The most appropriate management approach for a patient presenting with unilateral swelling under the jaw would be to perform an incision and drainage to relieve the swelling, treat the underlying cause to prevent recurrence, and administer antibiotics to combat any potential infection. The other options do not provide a comprehensive approach to treatment.",
      choices: [
        {
          id: "c1",
          content:
            "Incision and drainage, treat the underlying cause, and administer antibiotics",
          explanation: "Correct!",
          question_id: "q175",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Incision and drainage, treat the underlying cause",
          explanation: "Incorrect.",
          question_id: "q175",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Administer antibiotics only",
          explanation: "Incorrect.",
          question_id: "q175",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Refer to a specialist without any immediate treatment",
          explanation: "Incorrect.",
          question_id: "q175",
          is_correct: false,
        },
      ],
    },
    {
      id: "q177",
      content:
        "A radiograph reveals what appears to be a Dentigerous cyst, which is so large that it extends from the angle of the jaw up to the condyle, with only the roots of the third molar outside of its border. What would be the most appropriate management for this condition?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "A Dentigerous cyst is a type of odontogenic cyst associated with the crown of an unerupted or developing tooth. The cyst can displace teeth and cause bone deformation. The standard treatment for a Dentigerous cyst is enucleation, which is the surgical removal of the cyst. However, in cases where the cyst is large and extends to critical anatomical structures, enucleation with debridement is often recommended. Debridement is the removal of damaged tissue or foreign objects from a wound. This helps to reduce the size of the cyst and minimize potential damage to surrounding structures.",
      choices: [
        {
          id: "c1",
          content: "Enucleation only",
          explanation: "Incorrect.",
          question_id: "q177",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Enucleation with debridement",
          explanation: "Correct!",
          question_id: "q177",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Conservative observation without intervention",
          explanation: "Incorrect.",
          question_id: "q177",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Antibiotic therapy",
          explanation: "Incorrect.",
          question_id: "q177",
          is_correct: false,
        },
      ],
    },
    {
      id: "q178",
      content:
        "In a case where the initial root length is 21 mm, but after preparation, only 18 mm is felt, what could be the possible reason?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In endodontic treatment, if the initial root length is 21 mm and after preparation, only 18 mm is felt, the most likely reason is the formation of a ledge. A ledge is formed when the endodontic file deviates from the original canal path. This can occur due to the use of inflexible instruments, excessive force, or incorrect angulation during instrumentation. This results in a shorter felt length as the file cannot pass beyond the ledge.",
      choices: [
        {
          id: "c1",
          content: "Perforation of the root",
          explanation: "Incorrect.",
          question_id: "q178",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Formation of a ledge",
          explanation: "Correct!",
          question_id: "q178",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Over-instrumentation",
          explanation: "Incorrect.",
          question_id: "q178",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Presence of a root fracture",
          explanation: "Incorrect.",
          question_id: "q178",
          is_correct: false,
        },
      ],
    },
    {
      id: "q179",
      content:
        "In endodontic treatment, what could be the possible cause for the sudden disappearance of a canal that was previously identified?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In endodontic treatment, the sudden disappearance of a canal that was previously identified could be due to the formation of a ledge. A ledge is formed when the endodontic file deviates from the original canal path, creating a false path. This can block the view or access to the original canal, making it seem as if it has disappeared. Perforation and bifurcation would not cause the canal to disappear, and calcification is a slow process that would not result in a sudden disappearance.",
      choices: [
        {
          id: "c1",
          content: "Perforation of the canal",
          explanation: "Incorrect.",
          question_id: "q179",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Formation of a ledge",
          explanation: "Correct!",
          question_id: "q179",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Bifurcation of the canal",
          explanation: "Incorrect.",
          question_id: "q179",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Calcification of the canal",
          explanation: "Incorrect.",
          question_id: "q179",
          is_correct: false,
        },
      ],
    },
    {
      id: "q182",
      content:
        "Based on the radiographic image provided, identify the mishap that has occurred in the central maxillary incisor.",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "In the context of endodontic treatment, a perforation refers to an artificial communication between the root canal system and the external tooth surface. This can be identified on a radiographic image as a disruption in the continuity of the root canal or the tooth structure. A ledge formation refers to an obstruction in the root canal, often caused by improper instrumentation, which can also be identified on a radiograph. Stripping refers to a thinning of the root canal wall, which is usually a result of over-instrumentation. In this case, the correct answer is perforation, as it is the mishap identified in the radiographic image of the central maxillary incisor.",
      choices: [
        {
          id: "c1",
          content: "Perforation of the root canal",
          explanation: "Correct!",
          question_id: "q182",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Formation of a ledge in the root canal",
          explanation: "Incorrect.",
          question_id: "q182",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Stripping of the root canal",
          explanation: "Incorrect.",
          question_id: "q182",
          is_correct: false,
        },
      ],
    },
    {
      id: "q183",
      content:
        "What anatomical landmarks define the Frankfort horizontal plane in craniofacial anthropometry?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The Frankfort horizontal plane, often used in orthodontics and craniofacial anthropometry, is defined by a straight line passing through the point known as the 'porion' (the uppermost point on the margin of the external auditory meatus) and the 'orbitale' (the lowest point on the margin of the orbit). The other options are distractors and do not define the Frankfort plane.",
      choices: [
        {
          id: "c1",
          content: "Between the porion and the orbitale",
          explanation: "Correct!",
          question_id: "q183",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Between the nasion and the inion",
          explanation: "Incorrect.",
          question_id: "q183",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Between the glabella and the opisthocranion",
          explanation: "Incorrect.",
          question_id: "q183",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Between the bregma and the asterion",
          explanation: "Incorrect.",
          question_id: "q183",
          is_correct: false,
        },
      ],
    },
    {
      id: "q184",
      content:
        "What is the appropriate concentration of fluoride (in ppm) recommended for a 14-year-old individual?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The recommended concentration of fluoride in toothpaste for a 14-year-old individual is 1450 ppm. This is the standard concentration for individuals above the age of 6. Lower concentrations are typically recommended for younger children due to the risk of dental fluorosis.",
      choices: [
        {
          id: "c1",
          content: "500 ppm",
          explanation: "Incorrect.",
          question_id: "q184",
          is_correct: false,
        },
        {
          id: "c2",
          content: "1450 ppm",
          explanation: "Correct!",
          question_id: "q184",
          is_correct: true,
        },
        {
          id: "c3",
          content: "2000 ppm",
          explanation: "Incorrect.",
          question_id: "q184",
          is_correct: false,
        },
        {
          id: "c4",
          content: "2500 ppm",
          explanation: "Incorrect.",
          question_id: "q184",
          is_correct: false,
        },
      ],
    },
    {
      id: "q186",
      content:
        "A patient presents with extremely dark, reddish and swollen gingiva. The clinical image suggests a possible case of Mucous Membrane Pemphigoid (MMP). What diagnostic test should be performed to confirm this diagnosis?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "Mucous Membrane Pemphigoid (MMP) is a group of rare chronic autoimmune disorders characterized by blistering lesions that primarily affect the various mucous membranes of the body. The diagnosis of MMP is confirmed by biopsy of the affected tissue and direct immunofluorescence of the biopsy specimen. The biopsy helps to identify the characteristic histopathological changes, while direct immunofluorescence helps to identify the immune deposits at the basement membrane zone, which is a characteristic feature of MMP.",
      choices: [
        {
          id: "c1",
          content: "Biopsy only",
          explanation: "Incorrect.",
          question_id: "q186",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Biopsy and Direct Immunofluorescence",
          explanation: "Correct!",
          question_id: "q186",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Blood test",
          explanation: "Incorrect.",
          question_id: "q186",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Radiographic examination",
          explanation: "Incorrect.",
          question_id: "q186",
          is_correct: false,
        },
      ],
    },
    {
      id: "q187",
      content:
        "What is the approximate distance between the Inferior Alveolar Nerve (IAN) and a 13 mm dental implant?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The distance between the Inferior Alveolar Nerve (IAN) and a 13 mm dental implant is approximately 11 mm. This is important to consider during dental implant placement to avoid nerve damage.",
      choices: [
        {
          id: "c1",
          content: "10 mm",
          explanation: "Incorrect.",
          question_id: "q187",
          is_correct: false,
        },
        {
          id: "c2",
          content: "11 mm",
          explanation: "Correct!",
          question_id: "q187",
          is_correct: true,
        },
        {
          id: "c3",
          content: "13 mm",
          explanation: "Incorrect.",
          question_id: "q187",
          is_correct: false,
        },
        {
          id: "c4",
          content: "14 mm",
          explanation: "Incorrect.",
          question_id: "q187",
          is_correct: false,
        },
      ],
    },
    {
      id: "q188",
      content:
        "A mother is concerned about her 5-year-old child's seemingly smaller jaw. As a dental professional, what would be your advice regarding orthodontic treatment?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Orthodontic treatment is typically deferred until the child is 7 years old. At this age, the first permanent molars and incisors have usually come in, which helps orthodontists determine whether or not there are any issues, such as overbite, open bite, crowding or gummy smiles. It's also the age when jaw growth can be better assessed. Immediate treatment or surgical intervention is not usually recommended for a 5-year-old child with a seemingly smaller jaw, as the jaw is still growing and developing.",
      choices: [
        {
          id: "c1",
          content: "Advise immediate orthodontic treatment",
          explanation: "Incorrect.",
          question_id: "q188",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Defer orthodontic treatment until the child is 7 years old",
          explanation: "Correct!",
          question_id: "q188",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Suggest surgical intervention",
          explanation: "Incorrect.",
          question_id: "q188",
          is_correct: false,
        },
        {
          id: "c4",
          content:
            "Recommend a wait-and-see approach until the child's jaw growth can be further assessed",
          explanation: "Incorrect.",
          question_id: "q188",
          is_correct: false,
        },
      ],
    },
    {
      id: "q189",
      content:
        "For a diabetic patient who is taking bisphosphonates, which procedure is contraindicated for dental implant placement?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Bisphosphonates are a type of drug that can slow down or prevent bone loss. They are often prescribed for patients who have conditions like osteoporosis or certain types of cancer. However, these drugs can also interfere with the body's natural bone healing process, which is crucial for the success of procedures like dental implants. Therefore, bone grafting is contraindicated for patients taking bisphosphonates, especially if they also have other risk factors like diabetes.",
      choices: [
        {
          id: "c1",
          content: "Extraction of the tooth",
          explanation: "Incorrect.",
          question_id: "q189",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Bone grafting",
          explanation: "Correct!",
          question_id: "q189",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Sinus lift procedure",
          explanation: "Incorrect.",
          question_id: "q189",
          is_correct: false,
        },
        {
          id: "c4",
          content: "None of the above",
          explanation: "Incorrect.",
          question_id: "q189",
          is_correct: false,
        },
      ],
    },
    {
      id: "q190",
      content:
        "What could be the possible cause of a V-shaped abrasion in a patient with a ceramic bracket?",
      category_id: "geography",
      image_url: "",
      explanation:
        "A V-shaped abrasion in a patient with a ceramic bracket could be due to the bracket itself. The ceramic material, while aesthetically pleasing, can be abrasive to the surrounding oral tissues, leading to the formation of V-shaped abrasions. The other options listed are general causes of tooth abrasion but are not specifically related to the presence of a ceramic bracket.",
      choices: [
        {
          id: "c1",
          content: "Due to the ceramic bracket",
          explanation: "Correct!",
          question_id: "q190",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Due to poor oral hygiene",
          explanation: "Incorrect.",
          question_id: "q190",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Due to the use of a hard-bristled toothbrush",
          explanation: "Incorrect.",
          question_id: "q190",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Due to the consumption of acidic foods",
          explanation: "Incorrect.",
          question_id: "q190",
          is_correct: false,
        },
      ],
    },
    {
      id: "q191",
      content:
        "An African patient presents with a bump or swelling on their upper lip. What is the most likely diagnosis?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Angioedema is a condition characterized by swelling beneath the skin, often in the face and lips. It is often associated with an allergic reaction, which can cause the blood vessels in these areas to become inflamed and swollen. While a mucocele could also present as a bump or swelling, it is typically associated with a blocked salivary gland, which would not be specific to an African patient or the upper lip. Herpes Simplex Virus and Oral Candidiasis would present with other symptoms and are less likely in this case.",
      choices: [
        {
          id: "c1",
          content: "Mucocele",
          explanation: "Incorrect.",
          question_id: "q191",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Angioedema",
          explanation: "Correct!",
          question_id: "q191",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Herpes Simplex Virus",
          explanation: "Incorrect.",
          question_id: "q191",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Oral Candidiasis",
          explanation: "Incorrect.",
          question_id: "q191",
          is_correct: false,
        },
      ],
    },
    {
      id: "q192",
      content:
        "Which bacteria is primarily responsible for causing periodontitis?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Periodontitis is primarily caused by Porphyromonas gingivalis and Treponema denticola. These bacteria are part of the complex biofilm that forms on the teeth and can lead to inflammation and destruction of the tissues supporting the teeth. Streptococcus mutans and Lactobacillus acidophilus are primarily associated with dental caries, not periodontitis. Actinomyces israelii and Fusobacterium nucleatum are associated with root canal infections and periodontal disease, but they are not the primary causative agents of periodontitis. Staphylococcus aureus and Escherichia coli are not typically found in the oral cavity and are not associated with periodontitis.",
      choices: [
        {
          id: "c1",
          content: "Porphyromonas gingivalis and Treponema denticola",
          explanation: "Correct!",
          question_id: "q192",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Streptococcus mutans and Lactobacillus acidophilus",
          explanation: "Incorrect.",
          question_id: "q192",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Actinomyces israelii and Fusobacterium nucleatum",
          explanation: "Incorrect.",
          question_id: "q192",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Staphylococcus aureus and Escherichia coli",
          explanation: "Incorrect.",
          question_id: "q192",
          is_correct: false,
        },
      ],
    },
    {
      id: "q193",
      content:
        "A photograph is provided of a dental drawer. Based on the image, would you classify the drawer as clean or contaminated?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "The correct answer is 'Clean, with no visible signs of contamination'. In dentistry, cleanliness and sterilization are of utmost importance to prevent the spread of infections. A drawer in a dental clinic is considered clean if there are no visible signs of contamination such as blood, saliva, or debris. The image provided should be carefully examined to determine the cleanliness of the drawer.",
      choices: [
        {
          id: "c1",
          content: "Clean, with no visible signs of contamination",
          explanation: "Correct!",
          question_id: "q193",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Contaminated, with visible signs of contamination",
          explanation: "Incorrect.",
          question_id: "q193",
          is_correct: false,
        },
        {
          id: "c3",
          content:
            "Neither clean nor contaminated, as there are no clear indications",
          explanation: "Incorrect.",
          question_id: "q193",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Cannot be determined without further information",
          explanation: "Incorrect.",
          question_id: "q193",
          is_correct: false,
        },
      ],
    },
    {
      id: "q194",
      content:
        "What is the component that serves as a connection between the dental implant and the crown?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In dental implantology, the abutment is the part that connects the dental implant (which is embedded in the bone) and the overlying crown. The healing screw is a component that is placed into the implant during the healing phase to prevent the soft tissues from growing over the implant. The implant body is the part that is surgically placed into the bone, and the crown margin is the edge of the crown where it meets the tooth or implant.",
      choices: [
        {
          id: "c1",
          content: "Abutment",
          explanation: "Correct!",
          question_id: "q194",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Healing screw",
          explanation: "Incorrect.",
          question_id: "q194",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Implant body",
          explanation: "Incorrect.",
          question_id: "q194",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Crown margin",
          explanation: "Incorrect.",
          question_id: "q194",
          is_correct: false,
        },
      ],
    },
    {
      id: "q195",
      content:
        "Given a radiographic image of an impacted molar, which term best describes the relationship between the impacted tooth and the adjacent structures?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "In radiographic imaging, 'superimposition' refers to the overlapping of structures, which can often be seen in the case of an impacted molar. The term describes the relationship between the impacted tooth and the adjacent structures. 'Eruption' refers to the process by which a tooth moves from its developmental position within the jaws to its functional position in the oral cavity. 'Resorption' is the process by which the body removes existing bone or hard tissue. 'Fusion' is a rare condition where two adjacent teeth become joined by dentin or enamel.",
      choices: [
        {
          id: "c1",
          content: "Superimposition",
          explanation: "Correct!",
          question_id: "q195",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Eruption",
          explanation: "Incorrect.",
          question_id: "q195",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Resorption",
          explanation: "Incorrect.",
          question_id: "q195",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Fusion",
          explanation: "Incorrect.",
          question_id: "q195",
          is_correct: false,
        },
      ],
    },
    {
      id: "q196",
      content:
        "A patient is planned for a crown lengthening procedure and has 2 mm of keratinized gingiva. What type of flap would be performed in this case?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In a crown lengthening procedure where the patient has 2 mm of keratinized gingiva, an Apically Positioned Flap would be performed. This procedure involves repositioning the gingival margin apically, which allows for more tooth structure to be exposed. This is particularly useful in cases where there is insufficient tooth structure to support a restoration. The other options, Coronally Positioned Flap, Laterally Positioned Flap, and Semilunar Flap, are not typically used in crown lengthening procedures.",
      choices: [
        {
          id: "c1",
          content: "Apically Positioned Flap",
          explanation: "Correct!",
          question_id: "q196",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Coronally Positioned Flap",
          explanation: "Incorrect.",
          question_id: "q196",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Laterally Positioned Flap",
          explanation: "Incorrect.",
          question_id: "q196",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Semilunar Flap",
          explanation: "Incorrect.",
          question_id: "q196",
          is_correct: false,
        },
      ],
    },
    {
      id: "q197",
      content:
        "What is the term for the grooved surface located at the palate just posterior to the incisors?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The incisive papilla is a soft tissue feature located at the midline of the palate, just posterior to the maxillary central incisors. It covers the incisive foramen, which is an opening in the hard palate that allows the passage of blood vessels and nerves. The palatal rugae are ridges of mucous membrane at the front of the hard palate, while the median raphe is a vertical ridge of tissue that runs down the middle of the hard palate. The hard palate is the bony structure that forms the roof of the mouth.",
      choices: [
        {
          id: "c1",
          content: "Palatal rugae",
          explanation: "Incorrect.",
          question_id: "q197",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Median raphe",
          explanation: "Incorrect.",
          question_id: "q197",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Incisive papilla",
          explanation: "Correct!",
          question_id: "q197",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Hard palate",
          explanation: "Incorrect.",
          question_id: "q197",
          is_correct: false,
        },
      ],
    },
    {
      id: "q198",
      content:
        "A patient with anxiety presents for their first dental treatment. Despite reassurances, the patient's anxiety remains high throughout the procedure. The patient's blood pressure is elevated and their heart rate is 90. What is the most likely explanation for the patient's condition?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The patient's elevated blood pressure and heart rate, coupled with their high anxiety levels during the dental procedure, suggest that their condition is likely due to stress from the dental procedure. While it's possible that the patient may have an underlying psychological disorder, panic attack, or cardiovascular disease, these options are less likely given the context of the situation. It's important for the dentist to manage the patient's anxiety effectively to ensure their comfort and safety during dental procedures.",
      choices: [
        {
          id: "c1",
          content:
            "The patient's condition is due to stress from the dental procedure",
          explanation: "Correct!",
          question_id: "q198",
          is_correct: true,
        },
        {
          id: "c2",
          content:
            "The patient has an underlying psychological disorder that needs referral",
          explanation: "Incorrect.",
          question_id: "q198",
          is_correct: false,
        },
        {
          id: "c3",
          content: "The patient is experiencing a panic attack",
          explanation: "Incorrect.",
          question_id: "q198",
          is_correct: false,
        },
        {
          id: "c4",
          content: "The patient has a cardiovascular disease",
          explanation: "Incorrect.",
          question_id: "q198",
          is_correct: false,
        },
      ],
    },
    {
      id: "q199",
      content:
        "A patient was treated for influenza and subsequently, several healthcare providers became infected. What is the most effective method to prevent such transmission of infection in a dental practice setting?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The most effective method to prevent the transmission of infections in a dental practice setting is the use of Personal Protective Equipment (PPE). This includes gloves, face masks, protective eyewear, and gowns. While regular hand washing, use of face masks only, and regular cleaning of the dental office are important, they are not as comprehensive as the use of PPE in preventing the spread of infections.",
      choices: [
        {
          id: "c1",
          content: "Use of Personal Protective Equipment (PPE)",
          explanation: "Correct!",
          question_id: "q199",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Regular hand washing only",
          explanation: "Incorrect.",
          question_id: "q199",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Use of face masks only",
          explanation: "Incorrect.",
          question_id: "q199",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Regular cleaning of the dental office only",
          explanation: "Incorrect.",
          question_id: "q199",
          is_correct: false,
        },
      ],
    },
    {
      id: "q200",
      content:
        "What is the likely outcome if an alginate impression is left in a solution for an extended period of time?",
      category_id: "geography",
      image_url: "",
      explanation:
        "If an alginate impression is left in a solution for too long, it will undergo imbibition, which is the process of absorbing water. This can cause the impression to swell and distort, leading to inaccurate results.",
      choices: [
        {
          id: "c1",
          content: "Imbibition",
          explanation: "Correct!",
          question_id: "q200",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Syneresis",
          explanation: "Incorrect.",
          question_id: "q200",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Shrinkage",
          explanation: "Incorrect.",
          question_id: "q200",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Expansion",
          explanation: "Incorrect.",
          question_id: "q200",
          is_correct: false,
        },
      ],
    },
    {
      id: "q201",
      content:
        "What would be the likely outcome when orthodontic treatment is used to move a canine tooth that has thin biotype gingiva?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Thin biotype gingiva is more prone to recession, especially when subjected to orthodontic forces. This is because the thin gingival tissue may not be able to withstand the stress and strain caused by the orthodontic movement, leading to recession. The other options, such as gingival hyperplasia, tooth discoloration, and tooth resorption, are not typically associated with the movement of teeth in thin biotype gingiva.",
      choices: [
        {
          id: "c1",
          content: "Gingival recession",
          explanation: "Correct!",
          question_id: "q201",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Gingival hyperplasia",
          explanation: "Incorrect.",
          question_id: "q201",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Tooth discoloration",
          explanation: "Incorrect.",
          question_id: "q201",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Tooth resorption",
          explanation: "Incorrect.",
          question_id: "q201",
          is_correct: false,
        },
      ],
    },
    {
      id: "q202",
      content:
        "When is the most appropriate time to perform a frenectomy in relation to orthodontic treatment?",
      category_id: "geography",
      image_url: "",
      explanation:
        "A frenectomy, which is the removal or modification of the frenulum, is typically performed after the completion of orthodontic treatment. This is to prevent the frenulum from causing a relapse of the orthodontic correction, particularly in cases where the frenulum is contributing to a diastema (gap) between the front teeth. Performing the frenectomy before or during orthodontic treatment may not be as effective, as the forces exerted by the frenulum could still cause a relapse.",
      choices: [
        {
          id: "c1",
          content: "Immediately after completion of orthodontic treatment",
          explanation: "Correct!",
          question_id: "q202",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Before the commencement of orthodontic treatment",
          explanation: "Incorrect.",
          question_id: "q202",
          is_correct: false,
        },
        {
          id: "c3",
          content: "One day after the initiation of orthodontic treatment",
          explanation: "Incorrect.",
          question_id: "q202",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Halfway through the orthodontic treatment",
          explanation: "Incorrect.",
          question_id: "q202",
          is_correct: false,
        },
      ],
    },
    {
      id: "q204",
      content:
        "Which of the following dental signs can be used to diagnose a patient with bulimia?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Bulimia nervosa is an eating disorder characterized by episodes of binge eating followed by purging. This frequent vomiting can lead to erosion of the lingual surfaces of the teeth due to the exposure to stomach acid. Therefore, erosion of the lingual section of teeth can be a sign used to diagnose a patient with bulimia. The other options, such as the presence of dental caries, gingival recession, and tooth discoloration, can be seen in many other conditions and are not specific to bulimia.",
      choices: [
        {
          id: "c1",
          content: "Erosion of the lingual section of teeth",
          explanation: "Correct!",
          question_id: "q204",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Presence of dental caries",
          explanation: "Incorrect.",
          question_id: "q204",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Gingival recession",
          explanation: "Incorrect.",
          question_id: "q204",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Tooth discoloration",
          explanation: "Incorrect.",
          question_id: "q204",
          is_correct: false,
        },
      ],
    },
    {
      id: "q205",
      content:
        "Which condition is typically associated with a 'ground glass' appearance on a radiographic examination?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "Fibrous dysplasia is a bone disorder in which fibrous connective tissue develops in place of normal bone, leading to weak, deformed bones. On radiographs, fibrous dysplasia often presents a characteristic 'ground glass' appearance. The other options, Ameloblastoma, Dentinogenesis imperfecta, and Osteosarcoma, do not typically present with this radiographic appearance.",
      choices: [
        {
          id: "c1",
          content: "Fibrous dysplasia",
          explanation: "Correct!",
          question_id: "q205",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Ameloblastoma",
          explanation: "Incorrect.",
          question_id: "q205",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Dentinogenesis imperfecta",
          explanation: "Incorrect.",
          question_id: "q205",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Osteosarcoma",
          explanation: "Incorrect.",
          question_id: "q205",
          is_correct: false,
        },
      ],
    },
    {
      id: "q207",
      content:
        "A patient has been habitually chewing betel and has subsequently developed a fibrous tissue in the oral cavity. What is the most appropriate management strategy for this condition?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The development of fibrous tissue in the oral cavity due to habitual chewing of betel is a condition known as Oral Submucous Fibrosis. The first step in management is to confirm the diagnosis by performing a biopsy and histopathological examination. This will help in ruling out other conditions and planning further treatment. Prescribing antibiotics and analgesics, advising the patient to stop chewing betel, and referring the patient to a psychiatrist are all secondary steps that may be taken based on the results of the biopsy and the patient's overall condition.",
      choices: [
        {
          id: "c1",
          content: "Perform a biopsy and histopathological examination",
          explanation: "Correct!",
          question_id: "q207",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Prescribe antibiotics and analgesics",
          explanation: "Incorrect.",
          question_id: "q207",
          is_correct: false,
        },
        {
          id: "c3",
          content:
            "Advise the patient to stop chewing betel and monitor the condition",
          explanation: "Incorrect.",
          question_id: "q207",
          is_correct: false,
        },
        {
          id: "c4",
          content:
            "Refer the patient to a psychiatrist for addiction counseling",
          explanation: "Incorrect.",
          question_id: "q207",
          is_correct: false,
        },
      ],
    },
    {
      id: "q208",
      content:
        "A patient has been using a product named 'Shamma' for several years and has developed a lesion on his tongue. He has been aware of the lesion, but only recently, he has experienced difficulty in opening his mouth. The lesion is located at the floor of the tongue and mostly covers one side. What is the most likely cause of these symptoms?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "The patient's symptoms and history of using 'Shamma', a type of smokeless tobacco, suggest a diagnosis of Oral submucous fibrosis. This is a chronic, complex, premalignant condition of the oral cavity characterized by juxta-epithelial inflammatory reaction and progressive fibrosis of the submucosal tissues. It results in stiffness of the oral mucosa and an inability to open the mouth fully. Squamous cell carcinoma and Nicotine stomatitis are possible conditions associated with tobacco use, but they do not typically cause difficulty in opening the mouth. Keratocystic odontogenic tumor is a benign neoplasm that typically affects the jaw and does not have a direct link with tobacco use.",
      choices: [
        {
          id: "c1",
          content: "Squamous cell carcinoma",
          explanation: "Incorrect.",
          question_id: "q208",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Nicotine stomatitis",
          explanation: "Incorrect.",
          question_id: "q208",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Oral submucous fibrosis",
          explanation: "Correct!",
          question_id: "q208",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Keratocystic odontogenic tumor",
          explanation: "Incorrect.",
          question_id: "q208",
          is_correct: false,
        },
      ],
    },
    {
      id: "q209",
      content:
        "Which material is commonly used in dentistry to remove the smear layer during root canal treatment?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Ethylene diamine tetra-acetic acid (EDTA) is a chelating agent commonly used in endodontics during root canal treatment to remove the smear layer. The smear layer is a layer of debris and microorganisms that forms on the canal walls during instrumentation. Its removal enhances the disinfection of the root canal system and the sealing ability of the filling material. The other options, Calcium hydroxide, Sodium hypochlorite, and Formocresol, are not primarily used for this purpose.",
      choices: [
        {
          id: "c1",
          content: "Calcium hydroxide",
          explanation: "Incorrect.",
          question_id: "q209",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Ethylene diamine tetra-acetic acid (EDTA)",
          explanation: "Correct!",
          question_id: "q209",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Sodium hypochlorite",
          explanation: "Incorrect.",
          question_id: "q209",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Formocresol",
          explanation: "Incorrect.",
          question_id: "q209",
          is_correct: false,
        },
      ],
    },
    {
      id: "q216",
      content:
        "What is the most appropriate course of action when a patient refuses to provide consent for a dental procedure?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Informed consent is a fundamental ethical and legal requirement in healthcare. If a patient refuses to give consent for a dental procedure, the most appropriate course of action is to respect the patient's autonomy and refer them for a second opinion. Proceeding without consent, discharging the patient, or ignoring the patient's refusal are not ethical or legal responses.",
      choices: [
        {
          id: "c1",
          content: "Proceed with the procedure without consent",
          explanation: "Incorrect.",
          question_id: "q216",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Refer the patient for a second opinion",
          explanation: "Correct!",
          question_id: "q216",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Discharge the patient from the practice",
          explanation: "Incorrect.",
          question_id: "q216",
          is_correct: false,
        },
        {
          id: "c4",
          content:
            "Ignore the patient's refusal and continue with the procedure",
          explanation: "Incorrect.",
          question_id: "q216",
          is_correct: false,
        },
      ],
    },
    {
      id: "q218",
      content:
        "Which type of retraction cord is most suitable for use with immunocompromised patients?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Aluminum chloride-infused retraction cord is the most suitable for use with immunocompromised patients. This is because it is less likely to cause adverse reactions or complications in these patients compared to other types of retraction cords, such as those infused with phenylephrine or epinephrine, which can potentially cause systemic effects.",
      choices: [
        {
          id: "c1",
          content: "Phenylephrine-infused retraction cord",
          explanation: "Incorrect.",
          question_id: "q218",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Aluminum chloride-infused retraction cord",
          explanation: "Correct!",
          question_id: "q218",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Epinephrine-infused retraction cord",
          explanation: "Incorrect.",
          question_id: "q218",
          is_correct: false,
        },
        {
          id: "c4",
          content: "None of the above",
          explanation: "Incorrect.",
          question_id: "q218",
          is_correct: false,
        },
      ],
    },
    {
      id: "q219",
      content:
        "A patient presents with a missing upper lateral incisor and desires an esthetic fixed bridge. Which type of pontic would be most appropriate to use in this case?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In cases where esthetics is a primary concern, an ovate pontic is often the most suitable choice. This type of pontic is designed to mimic the natural emergence of a tooth from the gums, providing a highly esthetic result. The ovate pontic requires a concave preparation in the ridge to allow for the illusion of natural tooth emergence. Sanitary and ridge lap pontics, while useful in certain situations, do not provide the same level of esthetic result as an ovate pontic. A conical pontic, although not mentioned in the original question, is another type of pontic but is rarely used due to its poor esthetics and hygiene.",
      choices: [
        {
          id: "c1",
          content: "Ovate pontic",
          explanation: "Correct!",
          question_id: "q219",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Sanitary pontic",
          explanation: "Incorrect.",
          question_id: "q219",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Ridge lap pontic",
          explanation: "Incorrect.",
          question_id: "q219",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Conical pontic",
          explanation: "Incorrect.",
          question_id: "q219",
          is_correct: false,
        },
      ],
    },
    {
      id: "q220",
      content:
        "If a patient is diagnosed with Chronic Obstructive Pulmonary Disease (COPD), which antibiotic would be most appropriate to prescribe?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Erythromycin is a macrolide antibiotic that is often used in patients with COPD to treat respiratory tract infections. Diazepam is a benzodiazepine used for anxiety and seizures, not for infections. While it's true that not all COPD patients require antibiotics, in the context of this question, we are assuming an infection that needs treatment. Amoxicillin is a broad-spectrum antibiotic, but it's not the first choice for respiratory tract infections in COPD patients.",
      choices: [
        {
          id: "c1",
          content: "Erythromycin",
          explanation: "Correct!",
          question_id: "q220",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Diazepam",
          explanation: "Incorrect.",
          question_id: "q220",
          is_correct: false,
        },
        {
          id: "c3",
          content: "No antibiotic is necessary",
          explanation: "Incorrect.",
          question_id: "q220",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Amoxicillin",
          explanation: "Incorrect.",
          question_id: "q220",
          is_correct: false,
        },
      ],
    },
    {
      id: "q221",
      content:
        "In a patient with end-stage renal disease, which oral problem is most commonly observed?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Patients with end-stage renal disease often experience halitosis, also known as bad breath. This is due to the accumulation of waste products in the blood (uremia) that are normally removed by the kidneys. These waste products can be excreted through the lungs, causing a foul smell. Ulcerative stomatitis, gingival hyperplasia, and dental caries are not specifically associated with end-stage renal disease.",
      choices: [
        {
          id: "c1",
          content: "Halitosis",
          explanation: "Correct!",
          question_id: "q221",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Ulcerative stomatitis",
          explanation: "Incorrect.",
          question_id: "q221",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Gingival hyperplasia",
          explanation: "Incorrect.",
          question_id: "q221",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Dental caries",
          explanation: "Incorrect.",
          question_id: "q221",
          is_correct: false,
        },
      ],
    },
    {
      id: "q222",
      content:
        "What is the primary cause of 'moon face' appearance in patients, a condition that has been previously discussed?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The 'moon face' appearance in patients is primarily caused by excessive corticosteroids. Corticosteroids are hormones that can be prescribed to reduce inflammation and suppress the immune system. When taken in high doses for a long period, they can cause a range of side effects, including a 'moon face' appearance, which is characterized by a round, puffy face.",
      choices: [
        {
          id: "c1",
          content: "Excessive intake of vitamin D",
          explanation: "Incorrect.",
          question_id: "q222",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Excessive corticosteroids",
          explanation: "Correct!",
          question_id: "q222",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Excessive intake of calcium",
          explanation: "Incorrect.",
          question_id: "q222",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Excessive intake of vitamin A",
          explanation: "Incorrect.",
          question_id: "q222",
          is_correct: false,
        },
      ],
    },
    {
      id: "q223",
      content:
        "If blood manages to get under your gloves during a dental procedure, what should be the appropriate course of action, assuming that removing the gloves is not an option?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In the event that blood gets under the gloves during a dental procedure, the immediate course of action should be to apply antiseptic. This is to ensure that any potential pathogens are killed off and the risk of infection is minimized. Continuing with the procedure or washing hands with gloves on may not be sufficient to prevent infection. Informing the patient is not necessary as it does not contribute to the immediate management of the situation.",
      choices: [
        {
          id: "c1",
          content: "Apply antiseptic immediately",
          explanation: "Correct!",
          question_id: "q223",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Continue with the procedure",
          explanation: "Incorrect.",
          question_id: "q223",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Wash hands with gloves on",
          explanation: "Incorrect.",
          question_id: "q223",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Stop the procedure and inform the patient",
          explanation: "Incorrect.",
          question_id: "q223",
          is_correct: false,
        },
      ],
    },
    {
      id: "q224",
      content:
        "What is the appropriate management procedure for a needle prick injury when the patient has been previously diagnosed with Hepatitis B?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In the event of a needle prick injury, especially when the patient has been diagnosed with Hepatitis B, the first step is to wash the hands thoroughly to remove any potential pathogens. Applying pressure to the injury could potentially force more of the pathogen into the bloodstream, hence it should be avoided. The other options, such as applying pressure and plaster, administering antibiotics immediately, or applying a tourniquet, are not the first steps in managing such injuries.",
      choices: [
        {
          id: "c1",
          content: "Applying pressure and plaster to the injury",
          explanation: "Incorrect.",
          question_id: "q224",
          is_correct: false,
        },
        {
          id: "c2",
          content:
            "Washing hands thoroughly and avoiding the application of pressure to the injury",
          explanation: "Correct!",
          question_id: "q224",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Administering antibiotics immediately",
          explanation: "Incorrect.",
          question_id: "q224",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Applying a tourniquet to stop blood flow",
          explanation: "Incorrect.",
          question_id: "q224",
          is_correct: false,
        },
      ],
    },
    {
      id: "q227",
      content:
        "Which diagnostic tests are typically associated with the symptoms of orogenital ulceration?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Orogenital ulceration is a symptom of Behçet's disease, a rare disorder that causes blood vessel inflammation throughout the body. The Schirmer's test and pathergy test are diagnostic tests used to confirm Behçet's disease. The Schirmer's test measures the dryness of the eyes, while the pathergy test checks for skin hypersensitivity.",
      choices: [
        {
          id: "c1",
          content: "Schirmer's test and pathergy test",
          explanation: "Correct!",
          question_id: "q227",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Complete blood count and urinalysis",
          explanation: "Incorrect.",
          question_id: "q227",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Biopsy and culture test",
          explanation: "Incorrect.",
          question_id: "q227",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Magnetic resonance imaging and computed tomography scan",
          explanation: "Incorrect.",
          question_id: "q227",
          is_correct: false,
        },
      ],
    },
    {
      id: "q230",
      content:
        "A patient diagnosed with Acquired Immunodeficiency Syndrome (AIDS) presents to the clinic with a painless lesion on the lateral aspect of the tongue. What is the most appropriate course of action?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In patients with AIDS, oral lesions are common and can be indicative of various conditions, including oral candidiasis, hairy leukoplakia, Kaposi's sarcoma, etc. Given the complexity of these conditions and the patient's immunocompromised status, it is best to reassure the patient and refer them to a specialist for further evaluation and management.",
      choices: [
        {
          id: "c1",
          content: "Reassure the patient and refer to a specialist",
          explanation: "Correct!",
          question_id: "q230",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Prescribe antibiotics and schedule a follow-up appointment",
          explanation: "Incorrect.",
          question_id: "q230",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Perform a biopsy on the lesion",
          explanation: "Incorrect.",
          question_id: "q230",
          is_correct: false,
        },
        {
          id: "c4",
          content:
            "Advise the patient to maintain oral hygiene and monitor the lesion",
          explanation: "Incorrect.",
          question_id: "q230",
          is_correct: false,
        },
      ],
    },
    {
      id: "q231",
      content:
        "What is the most likely diagnosis for a unilateral, firm, and slowly growing oral lesion?",
      category_id: "geography",
      image_url: "",
      explanation:
        "A unilateral, firm, and slowly growing oral lesion is most likely a benign salivary gland tumor. Hypertrophy of salivary gland acini would typically present as bilateral enlargement of the salivary glands, not a unilateral lesion. Atrophy of salivary gland acini would lead to a decrease in size, not a growth. Malignant salivary gland tumors usually grow more rapidly and may be associated with pain or nerve involvement.",
      choices: [
        {
          id: "c1",
          content: "Hypertrophy of salivary gland acini",
          explanation: "Incorrect.",
          question_id: "q231",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Atrophy of salivary gland acini",
          explanation: "Incorrect.",
          question_id: "q231",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Benign salivary gland tumor",
          explanation: "Correct!",
          question_id: "q231",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Malignant salivary gland tumor",
          explanation: "Incorrect.",
          question_id: "q231",
          is_correct: false,
        },
      ],
    },
    {
      id: "q233",
      content:
        "Refer to the provided image of a dental cast. How would you classify the occlusion?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "The classification of occlusion is based on the relationship between the first molar of the upper and lower jaw. Class 2 malocclusion, also known as distocclusion, is when the upper molar is ahead of the lower molar. The term 'left modification' indicates that this condition is present on the left side of the mouth.",
      choices: [
        {
          id: "c1",
          content: "Class 2 malocclusion, left modification",
          explanation: "Correct!",
          question_id: "q233",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Class 1 malocclusion, right modification",
          explanation: "Incorrect.",
          question_id: "q233",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Class 3 malocclusion, left modification",
          explanation: "Incorrect.",
          question_id: "q233",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Class 2 malocclusion, right modification",
          explanation: "Incorrect.",
          question_id: "q233",
          is_correct: false,
        },
      ],
    },
    {
      id: "q234",
      content:
        "A 25-year-old woman presents to the clinic seeking orthodontic treatment. What would be the most suitable treatment approach in this case?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In orthodontics, the camouflage treatment approach is often used for adult patients who have mild to moderate skeletal discrepancies. This approach aims to mask the skeletal discrepancy by orthodontically moving the teeth to improve the patient's dental appearance and function, without altering the underlying skeletal structure. The Bionator appliance, Orthognathic surgery, and Functional appliance therapy are typically used for growing patients or those with severe skeletal discrepancies.",
      choices: [
        {
          id: "c1",
          content: "Camouflage treatment",
          explanation: "Correct!",
          question_id: "q234",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Bionator appliance",
          explanation: "Incorrect.",
          question_id: "q234",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Orthognathic surgery",
          explanation: "Incorrect.",
          question_id: "q234",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Functional appliance therapy",
          explanation: "Incorrect.",
          question_id: "q234",
          is_correct: false,
        },
      ],
    },
    {
      id: "q235",
      content:
        "A patient presents to the dental clinic with a fixed retainer that has a detached wire. What is the most appropriate management approach?",
      category_id: "geography",
      image_url: "",
      explanation:
        "When a patient presents with a detached wire from a fixed retainer, the most appropriate course of action is to refer them to their orthodontist. The orthodontist is the specialist who originally placed the retainer and is best equipped to handle any issues or adjustments that may be needed. Attempting to clean, scale, or reattach the wire without the proper expertise could potentially cause more harm than good.",
      choices: [
        {
          id: "c1",
          content: "Clean and scale the tooth, then reattach the wire",
          explanation: "Incorrect.",
          question_id: "q235",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Remove the entire wire and re-adhere it",
          explanation: "Incorrect.",
          question_id: "q235",
          is_correct: false,
        },
        {
          id: "c3",
          content:
            "Refer the patient to their orthodontist for further management",
          explanation: "Correct!",
          question_id: "q235",
          is_correct: true,
        },
        {
          id: "c4",
          content:
            "Attempt to reattach the wire without any cleaning or scaling",
          explanation: "Incorrect.",
          question_id: "q235",
          is_correct: false,
        },
      ],
    },
    {
      id: "q236",
      content:
        "A child from Saudi Arabia presents with dental crowding. Which method would be most appropriate to use in this case?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The Tanaka and Johnston method is a commonly used mixed dentition analysis method that predicts the mesiodistal width of unerupted canines and premolars based on the widths of the four mandibular incisors. It is particularly useful in cases of dental crowding in children, making it the most appropriate choice in this scenario. The Golden proportion method, Bolton analysis, and Moyers analysis are not typically used for this purpose.",
      choices: [
        {
          id: "c1",
          content: "Tanaka and Johnston method",
          explanation: "Correct!",
          question_id: "q236",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Golden proportion method",
          explanation: "Incorrect.",
          question_id: "q236",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Bolton analysis",
          explanation: "Incorrect.",
          question_id: "q236",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Moyers analysis",
          explanation: "Incorrect.",
          question_id: "q236",
          is_correct: false,
        },
      ],
    },
    {
      id: "q237",
      content:
        "What does it imply if a 7-year-old patient does not have a primary canine?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In a 7-year-old patient, the absence of a primary canine could most likely be due to a delay in the eruption of the tooth. Congenital absence is less common and severe crowding would not prevent the appearance of the tooth, although it could affect its position. Premature loss could also be a possibility but it is not mentioned among the original choices.",
      choices: [
        {
          id: "c1",
          content: "The primary canine is congenitally missing",
          explanation: "Incorrect.",
          question_id: "q237",
          is_correct: false,
        },
        {
          id: "c2",
          content: "There is a delay in the eruption of the primary canine",
          explanation: "Correct!",
          question_id: "q237",
          is_correct: true,
        },
        {
          id: "c3",
          content: "There is severe crowding in the dental arch",
          explanation: "Incorrect.",
          question_id: "q237",
          is_correct: false,
        },
        {
          id: "c4",
          content: "The primary canine has been prematurely lost",
          explanation: "Incorrect.",
          question_id: "q237",
          is_correct: false,
        },
      ],
    },
    {
      id: "q238",
      content:
        "A 9-year-old patient presents with stains on his incisor, premolar, and molar teeth. What could be the most likely cause of these stains?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In a 9-year-old patient, the most likely cause of stains on the incisor, premolar, and molar teeth would be excessive fluoride intake. This condition is known as dental fluorosis, which can occur when a child consumes too much fluoride over a long period when the teeth are developing under the gums. The other options are less likely: tetracycline staining typically occurs in children under 8 years of age and is associated with the use of tetracycline antibiotics. Excessive consumption of fizzy drinks and parental neglect leading to poor oral hygiene can cause tooth decay, but they are not the primary causes of tooth staining.",
      choices: [
        {
          id: "c1",
          content: "Excessive consumption of fizzy drinks",
          explanation: "Incorrect.",
          question_id: "q238",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Tetracycline staining",
          explanation: "Incorrect.",
          question_id: "q238",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Excessive fluoride intake",
          explanation: "Correct!",
          question_id: "q238",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Parental neglect leading to poor oral hygiene",
          explanation: "Incorrect.",
          question_id: "q238",
          is_correct: false,
        },
      ],
    },
    {
      id: "q241",
      content:
        "What is the most appropriate periodontal treatment for diabetic patients who are experiencing bone loss?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The most appropriate periodontal treatment for diabetic patients experiencing bone loss is the prescription of antibiotics and scaling. Antibiotics are used to control the bacterial infection causing the periodontal disease, while scaling removes plaque and tartar from the tooth surfaces. This helps to reduce inflammation and slow down bone loss. The other options are not specifically tailored to the treatment of periodontal disease in diabetic patients.",
      choices: [
        {
          id: "c1",
          content: "Prescription of antibiotics and scaling",
          explanation: "Correct!",
          question_id: "q241",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Prescription of painkillers and root canal treatment",
          explanation: "Incorrect.",
          question_id: "q241",
          is_correct: false,
        },
        {
          id: "c3",
          content:
            "Prescription of anti-inflammatory drugs and tooth extraction",
          explanation: "Incorrect.",
          question_id: "q241",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Prescription of antiviral drugs and dental implant",
          explanation: "Incorrect.",
          question_id: "q241",
          is_correct: false,
        },
      ],
    },
    {
      id: "q243",
      content:
        "What is the most appropriate management strategy for recurrent pericoronitis in a semi-impacted third molar (tooth 8) with the opposing third molar grinding on it?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In cases of recurrent pericoronitis with a semi-impacted third molar (tooth 8) and the opposing tooth causing trauma, the most appropriate management strategy is to extract the semi-impacted tooth. This is because the semi-impacted tooth is the source of the problem and its extraction will eliminate the cause of the recurrent pericoronitis. Irrigation or antibiotics may provide temporary relief but will not address the root cause of the problem. Extraction of the opposing tooth is not necessary unless it is also problematic.",
      choices: [
        {
          id: "c1",
          content: "Irrigation of the affected area",
          explanation: "Incorrect.",
          question_id: "q243",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Extraction of the semi-impacted third molar (tooth 8)",
          explanation: "Correct!",
          question_id: "q243",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Extraction of the opposing third molar",
          explanation: "Incorrect.",
          question_id: "q243",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Prescribing antibiotics",
          explanation: "Incorrect.",
          question_id: "q243",
          is_correct: false,
        },
      ],
    },
    {
      id: "q245",
      content:
        "What is the potential consequence if a rest seat is not adequately prepared in a removable partial denture?",
      category_id: "geography",
      image_url: "",
      explanation:
        "A rest seat is a prepared area in a tooth designed to receive the occlusal, incisal, or cingulum rest of a removable partial denture. If a rest seat is not adequately prepared, it can lead to a rest fracture due to the increased stress and pressure on the tooth structure.",
      choices: [
        {
          id: "c1",
          content: "Rest fracture",
          explanation: "Correct!",
          question_id: "q245",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Development of caries",
          explanation: "Incorrect.",
          question_id: "q245",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Periodontal disease",
          explanation: "Incorrect.",
          question_id: "q245",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Oral cancer",
          explanation: "Incorrect.",
          question_id: "q245",
          is_correct: false,
        },
      ],
    },
    {
      id: "q246",
      content:
        "What are the potential causes of breakage in a major connector in prosthodontics?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In prosthodontics, the major connector can break due to several reasons. One of the most common causes is cyclic fatigue. This occurs when the connector is subjected to repeated stress over time, leading to the formation of microscopic cracks that eventually cause the connector to break. Impingement on soft tissues, improper oral hygiene, and excessive use of abrasive toothpaste can cause other problems but are less likely to result in breakage of the major connector.",
      choices: [
        {
          id: "c1",
          content: "Cyclic fatigue",
          explanation: "Correct!",
          question_id: "q246",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Impingement on soft tissues",
          explanation: "Incorrect.",
          question_id: "q246",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Improper oral hygiene",
          explanation: "Incorrect.",
          question_id: "q246",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Excessive use of abrasive toothpaste",
          explanation: "Incorrect.",
          question_id: "q246",
          is_correct: false,
        },
      ],
    },
    {
      id: "q247",
      content:
        "Following the removal of deep caries, if there is less than 0.5 mm of dentine thickness remaining, which material should be applied?",
      category_id: "geography",
      image_url: "",
      explanation:
        "When the remaining dentine thickness is less than 0.5 mm after the removal of deep caries, calcium hydroxide should be applied. This is because calcium hydroxide is a pulp-capping agent that stimulates the formation of reparative dentine, thereby protecting the pulp from further damage.",
      choices: [
        {
          id: "c1",
          content: "Calcium hydroxide",
          explanation: "Correct!",
          question_id: "q247",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Resin-modified glass ionomer cement (RMGIC)",
          explanation: "Incorrect.",
          question_id: "q247",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Glass ionomer cement (GIC)",
          explanation: "Incorrect.",
          question_id: "q247",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Composite resin",
          explanation: "Incorrect.",
          question_id: "q247",
          is_correct: false,
        },
      ],
    },
    {
      id: "q248",
      content:
        "A radiograph reveals a radiolucency that has reached the pulp. After the removal of caries, the tooth is deemed non-restorable. What is the most appropriate treatment option in this case?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "In the given scenario, the radiograph shows that the caries has reached the pulp, which is a severe condition. After caries removal, if the tooth is non-restorable, it means the damage is too extensive to be repaired by restorative procedures like fillings or crowns. In such cases, the most appropriate treatment option is tooth extraction. Root canal treatment is not a suitable option as it is typically performed when there is enough healthy tooth structure remaining to support the tooth after the procedure.",
      choices: [
        {
          id: "c1",
          content: "Root Canal Treatment",
          explanation: "Incorrect.",
          question_id: "q248",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Tooth Extraction",
          explanation: "Correct!",
          question_id: "q248",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Dental Implant",
          explanation: "Incorrect.",
          question_id: "q248",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Dental Bridge",
          explanation: "Incorrect.",
          question_id: "q248",
          is_correct: false,
        },
      ],
    },
    {
      id: "q249",
      content:
        "In the case of a symphysis fracture of the mandible, as visualized on a Cone Beam Computed Tomography (CBCT) scan, how many plates should be used for the optimal management of the fracture?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "In the management of a symphysis fracture of the mandible, two plates are typically used. One plate is used for alignment (superior plate) and the other for stabilization (inferior plate). This method is known as the Champy's technique and is widely accepted in oral and maxillofacial surgery.",
      choices: [
        {
          id: "c1",
          content: "1 plate",
          explanation: "Incorrect.",
          question_id: "q249",
          is_correct: false,
        },
        {
          id: "c2",
          content: "2 plates",
          explanation: "Correct!",
          question_id: "q249",
          is_correct: true,
        },
        {
          id: "c3",
          content: "3 plates",
          explanation: "Incorrect.",
          question_id: "q249",
          is_correct: false,
        },
        {
          id: "c4",
          content: "4 plates",
          explanation: "Incorrect.",
          question_id: "q249",
          is_correct: false,
        },
      ],
    },
    {
      id: "q251",
      content:
        "What is the appropriate management technique for a Lefort 1 fracture?",
      category_id: "geography",
      image_url: "",
      explanation:
        "A Lefort 1 fracture is a type of facial fracture that involves the maxilla. The appropriate management technique for this type of fracture is Intermaxillary fixation (IMF). This procedure immobilizes the jaw to allow the bones to heal. The other options listed, such as root canal treatment, extraction of the affected tooth, and placement of a dental implant, are not appropriate management techniques for this type of fracture.",
      choices: [
        {
          id: "c1",
          content: "Intermaxillary fixation (IMF)",
          explanation: "Correct!",
          question_id: "q251",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Root canal treatment",
          explanation: "Incorrect.",
          question_id: "q251",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Extraction of the affected tooth",
          explanation: "Incorrect.",
          question_id: "q251",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Placement of a dental implant",
          explanation: "Incorrect.",
          question_id: "q251",
          is_correct: false,
        },
      ],
    },
    {
      id: "q252",
      content:
        "What is the appropriate management strategy for an oroantral communication of 2 mm following the extraction of an upper 6 tooth?",
      category_id: "geography",
      image_url: "",
      explanation:
        "An oroantral communication of less than 2 mm following tooth extraction can often be left untreated as it is likely to heal spontaneously. Larger communications may require more active management such as the application of gel foam and a figure 8 suture, creation of an advancement flap, or administration of antibiotics.",
      choices: [
        {
          id: "c1",
          content: "Application of gel foam and a figure 8 suture",
          explanation: "Incorrect.",
          question_id: "q252",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Creation of an advancement flap",
          explanation: "Incorrect.",
          question_id: "q252",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Administration of antibiotics",
          explanation: "Incorrect.",
          question_id: "q252",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Leaving it untreated if the size is less than 2 mm",
          explanation: "Correct!",
          question_id: "q252",
          is_correct: true,
        },
      ],
    },
    {
      id: "q253",
      content:
        "During a reduction procedure near the mylohyoid muscle, which nerve is at risk of injury?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The lingual nerve is at risk of injury during a reduction procedure near the mylohyoid muscle. This nerve provides general sensory innervation to the anterior two-thirds of the tongue, and damage to it can result in numbness or altered sensation in this area. The other nerves listed are not typically at risk during this procedure.",
      choices: [
        {
          id: "c1",
          content: "Lingual nerve",
          explanation: "Correct!",
          question_id: "q253",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Inferior alveolar nerve",
          explanation: "Incorrect.",
          question_id: "q253",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Hypoglossal nerve",
          explanation: "Incorrect.",
          question_id: "q253",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Facial nerve",
          explanation: "Incorrect.",
          question_id: "q253",
          is_correct: false,
        },
      ],
    },
    {
      id: "q254",
      content:
        "If a fracture occurs at the occluso distal angle of an upper lateral tooth, and the mesio angle has been restored with Glass Ionomer Cement (GIC), what would be the most appropriate treatment plan?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In the case of a fracture at the occluso distal angle of an upper lateral tooth, a full ceramic crown would be the most appropriate treatment plan. This is because a full ceramic crown can provide the necessary strength and stability to the tooth, while also offering a natural appearance. A three-quarter ceramic crown, composite restoration, or full metal crown may not provide the same level of strength and aesthetic appeal.",
      choices: [
        {
          id: "c1",
          content: "Full ceramic crown",
          explanation: "Correct!",
          question_id: "q254",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Three-quarter ceramic crown",
          explanation: "Incorrect.",
          question_id: "q254",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Composite restoration",
          explanation: "Incorrect.",
          question_id: "q254",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Full metal crown",
          explanation: "Incorrect.",
          question_id: "q254",
          is_correct: false,
        },
      ],
    },
    {
      id: "q255",
      content:
        "A six-year-old cooperative pediatric patient presents with four teeth affected by surface caries in one quadrant, with minimal plaque-induced caries. Which restorative material would be the most appropriate choice for this patient?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Resin-modified glass ionomer cement (RMGIC) is the most appropriate choice for a cooperative pediatric patient with surface caries. RMGIC has the advantage of fluoride release, which can help in caries prevention, and it also has good adhesion to tooth structure. Composite resin, while also a viable option, may not be as beneficial in a pediatric patient due to the longer chair time required for placement and the need for a dry field. Glass ionomer cement (GIC) also releases fluoride but has inferior mechanical properties compared to RMGIC. Stainless steel crowns (SSC) are typically used for extensive caries or after pulpal therapy, not for surface caries.",
      choices: [
        {
          id: "c1",
          content: "Composite resin",
          explanation: "Incorrect.",
          question_id: "q255",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Resin-modified glass ionomer cement (RMGIC)",
          explanation: "Correct!",
          question_id: "q255",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Glass ionomer cement (GIC)",
          explanation: "Incorrect.",
          question_id: "q255",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Stainless steel crown (SSC)",
          explanation: "Incorrect.",
          question_id: "q255",
          is_correct: false,
        },
      ],
    },
    {
      id: "q256",
      content:
        "What could be the possible diagnosis if one tooth in a quadrant appears different than the others as previously mentioned?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Regional odontodysplasia, also known as 'ghost teeth', is a rare developmental disorder of the dental hard tissues that affects a particular region of the dentition. It results in teeth that are smaller and different in appearance compared to the rest of the teeth in the quadrant. The other options, such as dentine dysplasia, amelogenesis imperfecta, and dentinogenesis imperfecta, typically affect all teeth, not just one in a quadrant.",
      choices: [
        {
          id: "c1",
          content: "Dentine dysplasia",
          explanation: "Incorrect.",
          question_id: "q256",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Regional odontodysplasia",
          explanation: "Correct!",
          question_id: "q256",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Amelogenesis imperfecta",
          explanation: "Incorrect.",
          question_id: "q256",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Dentinogenesis imperfecta",
          explanation: "Incorrect.",
          question_id: "q256",
          is_correct: false,
        },
      ],
    },
    {
      id: "q257",
      content:
        "Which of the following dental conditions is most likely to cause a metallic taste in the mouth?",
      category_id: "geography",
      image_url: "",
      explanation:
        "A metallic taste in the mouth is not typically associated with the intrusion of a tooth. However, it can be a symptom of subluxation, which is a dental condition where the tooth is loosened but not displaced from its socket. This can cause bleeding and the release of various compounds that may result in a metallic taste.",
      choices: [
        {
          id: "c1",
          content: "Intrusion of a tooth",
          explanation: "Incorrect.",
          question_id: "q257",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Subluxation of a tooth",
          explanation: "Correct!",
          question_id: "q257",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Extrusion of a tooth",
          explanation: "Incorrect.",
          question_id: "q257",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Luxation of a tooth",
          explanation: "Incorrect.",
          question_id: "q257",
          is_correct: false,
        },
      ],
    },
    {
      id: "q258",
      content:
        "An image shows upper primary central incisors that have been intruded and are in contact with their successors. A horizontal fracture is also observed. What is the most appropriate treatment plan in this case?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "In the case of a horizontal fracture in primary teeth that have intruded and are touching their successors, the most appropriate treatment plan would be to extract only the coronal segments of the fractured teeth. This is to prevent further damage to the successor teeth and to allow for proper eruption. Splinting the affected teeth or extracting the primary teeth entirely may not be necessary or beneficial in this case. Observation without immediate intervention may not be appropriate due to the risk of further complications.",
      choices: [
        {
          id: "c1",
          content: "Splint the affected teeth",
          explanation: "Incorrect.",
          question_id: "q258",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Extract the primary teeth",
          explanation: "Incorrect.",
          question_id: "q258",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Extract only the coronal segments of the fractured teeth",
          explanation: "Correct!",
          question_id: "q258",
          is_correct: true,
        },
        {
          id: "c4",
          content:
            "Observe and monitor the condition without immediate intervention",
          explanation: "Incorrect.",
          question_id: "q258",
          is_correct: false,
        },
      ],
    },
    {
      id: "q259",
      content:
        "For optimal results, what is the recommended duration for intra-canal medications in endodontic treatment?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Intra-canal medications are used in endodontic treatment to eliminate bacteria from the root canal system. The recommended duration for intra-canal medications is 2 weeks. This allows enough time for the medication to effectively eliminate bacteria, but is not so long that it risks causing damage to the tooth structure.",
      choices: [
        {
          id: "c1",
          content: "1 week",
          explanation: "Incorrect.",
          question_id: "q259",
          is_correct: false,
        },
        {
          id: "c2",
          content: "2 weeks",
          explanation: "Correct!",
          question_id: "q259",
          is_correct: true,
        },
        {
          id: "c3",
          content: "3 weeks",
          explanation: "Incorrect.",
          question_id: "q259",
          is_correct: false,
        },
        {
          id: "c4",
          content: "4 weeks",
          explanation: "Incorrect.",
          question_id: "q259",
          is_correct: false,
        },
      ],
    },
    {
      id: "q260",
      content:
        "A panoramic radiograph of a patient with Type 2 Diabetes shows no bone loss and bilateral edentulous areas. What would be the best treatment option for this patient?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "In the absence of bone loss, dental implants are a viable option for patients with Type 2 Diabetes. Implants provide a fixed solution that can help maintain bone levels and provide better function and aesthetics compared to removable options. Although Removable Partial Dentures (RPD) and Porcelain Fused to Metal Crowns (PFM) can also be used, they are not the best choice in this scenario. Complete dentures are not suitable as there are only bilateral edentulous areas, not complete edentulism.",
      choices: [
        {
          id: "c1",
          content: "Dental Implant",
          explanation: "Correct!",
          question_id: "q260",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Removable Partial Denture (RPD)",
          explanation: "Incorrect.",
          question_id: "q260",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Porcelain Fused to Metal Crown (PFM)",
          explanation: "Incorrect.",
          question_id: "q260",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Complete Denture",
          explanation: "Incorrect.",
          question_id: "q260",
          is_correct: false,
        },
      ],
    },
    {
      id: "q261",
      content: "What is the potential oral health consequence of pipe smoking?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Pipe smoking, similar to other forms of tobacco use, can lead to various oral health issues. One of the most common consequences is the development of inflammatory periodontal disease. This is due to the toxic substances in tobacco smoke that can cause inflammation and damage to the gums and other supporting structures of the teeth.",
      choices: [
        {
          id: "c1",
          content: "Active caries development",
          explanation: "Incorrect.",
          question_id: "q261",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Inflammatory periodontal disease",
          explanation: "Correct!",
          question_id: "q261",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Reactionary dentin formation",
          explanation: "Incorrect.",
          question_id: "q261",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Enhanced salivary flow rate",
          explanation: "Incorrect.",
          question_id: "q261",
          is_correct: false,
        },
      ],
    },
    {
      id: "q262",
      content:
        "What generation of dentin bonding agents does the process of etching with 37% phosphoric acid for 20 seconds, drying and leaving a wet surface, then applying a bonding agent for 20 seconds and curing belong to?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The process described in the question refers to the Fifth Generation of dentin bonding agents. This generation is also known as 'one-bottle systems' or 'wet bonding systems'. The process involves etching with phosphoric acid, leaving a wet surface (to keep collagen fibers fluffed up and not collapsed), and then applying a bonding agent which is then cured. This process optimizes the penetration of the bonding resin into the demineralized dentin.",
      choices: [
        {
          id: "c1",
          content: "Fourth Generation",
          explanation: "Incorrect.",
          question_id: "q262",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Fifth Generation",
          explanation: "Correct!",
          question_id: "q262",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Sixth Generation",
          explanation: "Incorrect.",
          question_id: "q262",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Eighth Generation",
          explanation: "Incorrect.",
          question_id: "q262",
          is_correct: false,
        },
      ],
    },
    {
      id: "q263",
      content:
        "A patient wishes to replace her anterior veneers due to dissatisfaction with their appearance. Which type of preparation would be most aesthetically pleasing and help avoid gingival inflammation?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Supragingival preparation is the most suitable choice for replacing anterior veneers. It is aesthetically pleasing and helps avoid gingival inflammation. Subgingival preparation can lead to gingival inflammation due to the difficulty in maintaining oral hygiene around the margins. Subcrestal and tissue level preparations are not typically used in veneer placement.",
      choices: [
        {
          id: "c1",
          content: "Supragingival preparation",
          explanation: "Correct!",
          question_id: "q263",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Subgingival preparation",
          explanation: "Incorrect.",
          question_id: "q263",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Subcrestal preparation",
          explanation: "Incorrect.",
          question_id: "q263",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Tissue level preparation",
          explanation: "Incorrect.",
          question_id: "q263",
          is_correct: false,
        },
      ],
    },
    {
      id: "q264",
      content:
        "A 20-year-old male patient with severe autism requires extraction of several teeth. Who is legally authorized to sign the consent form for this procedure?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In the case of a patient with severe autism, they may not have the capacity to understand the nature and consequences of a medical procedure, and thus may not be able to provide informed consent. In such cases, a parent or legal guardian, in this case, the patient's father, would be authorized to provide consent on the patient's behalf. The nurse or doctor involved in the patient's care would not be appropriate to provide consent, as this could represent a conflict of interest.",
      choices: [
        {
          id: "c1",
          content: "The patient himself",
          explanation: "Incorrect.",
          question_id: "q264",
          is_correct: false,
        },
        {
          id: "c2",
          content: "The patient's father",
          explanation: "Correct!",
          question_id: "q264",
          is_correct: true,
        },
        {
          id: "c3",
          content: "The patient's nurse",
          explanation: "Incorrect.",
          question_id: "q264",
          is_correct: false,
        },
        {
          id: "c4",
          content: "The patient's doctor",
          explanation: "Incorrect.",
          question_id: "q264",
          is_correct: false,
        },
      ],
    },
    {
      id: "q265",
      content:
        "A patient has been involved in an accident and is currently in the Intensive Care Unit (ICU) in a comatose state. Prior to this, he had expressed to his wife that in the event of a medical crisis where he becomes unconscious and requires a decision for intervention, he would prefer to be allowed to die instead of being paralyzed or reliant on a medical device. He had given his wife the authority to make this decision. However, his father is against this and insists on treating him as much as possible to save his life. According to Sharia law, who is the appropriate person to make the medical decision in this scenario?",
      category_id: "geography",
      image_url: "",
      explanation:
        "According to Sharia law, the person who has been given the authority by the patient prior to his unconscious state is the one who should make the medical decisions. In this case, the patient had given his wife the authority to make such decisions, hence, she is the appropriate person to make the decision.",
      choices: [
        {
          id: "c1",
          content: "The patient's wife",
          explanation: "Correct!",
          question_id: "q265",
          is_correct: true,
        },
        {
          id: "c2",
          content: "The patient's father",
          explanation: "Incorrect.",
          question_id: "q265",
          is_correct: false,
        },
        {
          id: "c3",
          content: "The attending doctor",
          explanation: "Incorrect.",
          question_id: "q265",
          is_correct: false,
        },
        {
          id: "c4",
          content: "A reporter",
          explanation: "Incorrect.",
          question_id: "q265",
          is_correct: false,
        },
      ],
    },
    {
      id: "q267",
      content:
        "What type of clasp and cross-section shape should be used for a patient requiring a removable partial denture (RPD) with a Class II Kennedy classification, where the most distal abutment is a premolar that is intact and requires no restoration?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In a Class II Kennedy classification where the most distal abutment is a premolar that is intact and requires no restoration, a wrought wire clasp and half round cross-sectioned is the most appropriate choice. Wrought wire clasps are more flexible and less likely to cause damage to the abutment tooth, especially when it is intact and requires no restoration. The half round cross-section allows for better distribution of forces and minimizes the risk of dislodgement of the RPD.",
      choices: [
        {
          id: "c1",
          content: "Cast clasp and half round cross-sectioned",
          explanation: "Incorrect.",
          question_id: "q267",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Cast clasp and round cross-sectioned",
          explanation: "Incorrect.",
          question_id: "q267",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Wrought wire clasp and half round cross-sectioned",
          explanation: "Correct!",
          question_id: "q267",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Wrought wire clasp and round cross-sectioned",
          explanation: "Incorrect.",
          question_id: "q267",
          is_correct: false,
        },
      ],
    },
    {
      id: "q268",
      content:
        "A patient presents with a white lesion in the buccal mucosa that extends to the distal of the corner of the mouth. The lesion does not move when the mucosa is stretched and it cannot be wiped off. What is the most likely diagnosis?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The description of the lesion - white, non-movable, and non-wipeable - is consistent with a white spongy nevus. This is a rare, inherited disorder that affects the mucous membranes, particularly in the mouth. Leukoedema, on the other hand, is a benign, milky-white appearance of the buccal mucosa that can be wiped off. Oral candidiasis also presents as a white lesion but can be wiped off, while leukoplakia is a white patch or plaque that cannot be rubbed off, but it does not typically extend to the distal of the corner of the mouth.",
      choices: [
        {
          id: "c1",
          content: "White spongy nevus",
          explanation: "Correct!",
          question_id: "q268",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Leukoedema",
          explanation: "Incorrect.",
          question_id: "q268",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Oral candidiasis",
          explanation: "Incorrect.",
          question_id: "q268",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Leukoplakia",
          explanation: "Incorrect.",
          question_id: "q268",
          is_correct: false,
        },
      ],
    },
    {
      id: "q269",
      content:
        "A radiograph shows a patient diagnosed with Necrotizing Ulcerative Gingivitis (NUG). The patient has been experiencing severe pain for a week and has been unable to maintain regular oral hygiene due to the pain. What would be the most appropriate management for this patient?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "Necrotizing Ulcerative Gingivitis (NUG) is a severe form of gingivitis that causes painful, bleeding gums, and ulcers in the gums. The first line of treatment for NUG is antibiotics to control the bacterial infection. Oral hygiene instructions (OHI) are also important but may not be feasible immediately due to the severe pain. A surgical flap procedure is not typically used in the management of NUG. Steroids are not the first line of treatment for NUG as they may suppress the immune response, potentially worsening the infection.",
      choices: [
        {
          id: "c1",
          content: "Prescribe antibiotics",
          explanation: "Correct!",
          question_id: "q269",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Provide Oral Hygiene Instructions (OHI)",
          explanation: "Incorrect.",
          question_id: "q269",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Perform a surgical flap procedure",
          explanation: "Incorrect.",
          question_id: "q269",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Prescribe steroids",
          explanation: "Incorrect.",
          question_id: "q269",
          is_correct: false,
        },
      ],
    },
    {
      id: "q270",
      content:
        "A 60-year-old patient presents with severe bone loss and requires extraction of all maxillary teeth in a quadrant. Which tooth should be the first to be extracted?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In a situation where multiple teeth in a quadrant need to be extracted, it is generally recommended to start from the anterior and proceed to the posterior. This approach allows for better visualization and access, and it also helps to maintain the patient's comfort and cooperation during the procedure.",
      choices: [
        {
          id: "c1",
          content: "Most mobile tooth",
          explanation: "Incorrect.",
          question_id: "q270",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Start from the anterior and proceed to the posterior",
          explanation: "Correct!",
          question_id: "q270",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Start from the posterior and proceed to the anterior",
          explanation: "Incorrect.",
          question_id: "q270",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Start with the tooth causing the most discomfort",
          explanation: "Incorrect.",
          question_id: "q270",
          is_correct: false,
        },
      ],
    },
    {
      id: "q271",
      content:
        "A patient presents with inflamed gingiva, plaque, and calculus. The patient also has uncontrolled diabetes and high blood pressure with a reading of 158/89. Which of the following is the most significant risk factor for the patient's oral condition?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "While poor oral hygiene, hypertension, and certain medications can contribute to oral health problems, uncontrolled diabetes is a significant risk factor for periodontal disease. Diabetes can weaken the body's overall immune system, making it more susceptible to infections, including periodontal diseases. High blood sugar levels can also lead to dry mouth, promoting bacterial growth and plaque formation. Therefore, uncontrolled diabetes is the most significant risk factor in this scenario.",
      choices: [
        {
          id: "c1",
          content: "Poor oral hygiene",
          explanation: "Incorrect.",
          question_id: "q271",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Uncontrolled diabetes",
          explanation: "Correct!",
          question_id: "q271",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Hypertension",
          explanation: "Incorrect.",
          question_id: "q271",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Unspecified medication",
          explanation: "Incorrect.",
          question_id: "q271",
          is_correct: false,
        },
      ],
    },
    {
      id: "q272",
      content:
        "What is the most appropriate course of action for a dentist when dealing with an asthmatic patient who has a known allergy to diazepam and exhibits nervousness and fear of dental procedures?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In this scenario, the most appropriate course of action would be to administer nitrous oxide sedation. Nitrous oxide is a safe and effective sedative agent that is mixed with oxygen and inhaled through a small mask that fits over your nose to help you relax. It is not intended to put you to sleep, but to help you feel more comfortable during dental procedures. It is also safe for asthmatic patients. Performing an allergy test for diazepam is not necessary as the patient's allergy is already known. Administering local anesthesia with epinephrine or steroids would not address the patient's anxiety and fear of dental procedures.",
      choices: [
        {
          id: "c1",
          content: "Perform an allergy test for diazepam",
          explanation: "Incorrect.",
          question_id: "q272",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Administer nitrous oxide sedation",
          explanation: "Correct!",
          question_id: "q272",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Administer local anesthesia with epinephrine",
          explanation: "Incorrect.",
          question_id: "q272",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Administer steroids",
          explanation: "Incorrect.",
          question_id: "q272",
          is_correct: false,
        },
      ],
    },
    {
      id: "q273",
      content:
        "An 18-year-old healthy student presents for a routine dental check-up. He maintains good oral hygiene and smokes shisha weekly. He has a foul odor and pseudomembranous bluish gingiva. What is the most appropriate course of action for this patient who is showing signs of Necrotizing Ulcerative Gingivitis (NUG)?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Necrotizing Ulcerative Gingivitis (NUG) is a severe form of gingivitis that causes painful, infected, bleeding gums, and ulcerations. It is often associated with poor oral hygiene, stress, and smoking. The first line of treatment is to improve oral hygiene, which includes scaling to remove plaque and tartar. Oral Hygiene Instructions (OHI) are also crucial to maintain good oral health. Antibiotics may be used in severe cases, but are not the first line of treatment. Biopsy is not necessary as the diagnosis can be made clinically.",
      choices: [
        {
          id: "c1",
          content: "Perform a biopsy",
          explanation: "Incorrect.",
          question_id: "q273",
          is_correct: false,
        },
        {
          id: "c2",
          content:
            "Perform scaling and provide Oral Hygiene Instructions (OHI)",
          explanation: "Correct!",
          question_id: "q273",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Prescribe antibiotics",
          explanation: "Incorrect.",
          question_id: "q273",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Refer to a periodontist",
          explanation: "Incorrect.",
          question_id: "q273",
          is_correct: false,
        },
      ],
    },
    {
      id: "q274",
      content:
        "A patient presents with a 5cm x 4cm ulceration on their tongue that is causing dysphagia. What would be the most appropriate initial treatment?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In the case of a large tongue ulcer causing dysphagia, initial treatment would typically involve the use of oral corticosteroids to reduce inflammation and alleviate symptoms. Aspiration would not be effective as it is not a fluid-filled lesion. Antifungal medication would only be appropriate if the ulcer was caused by a fungal infection, which is not indicated in the question. Surgical excision would be a more invasive treatment option and would not typically be the first line of treatment.",
      choices: [
        {
          id: "c1",
          content: "Aspiration of the ulcer",
          explanation: "Incorrect.",
          question_id: "q274",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Administration of antifungal medication",
          explanation: "Incorrect.",
          question_id: "q274",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Surgical excision of the ulcer",
          explanation: "Incorrect.",
          question_id: "q274",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Oral corticosteroids",
          explanation: "Correct!",
          question_id: "q274",
          is_correct: true,
        },
      ],
    },
    {
      id: "q275",
      content:
        "A four-year-old patient presents with extensive dental caries, multiple abscesses, and noticeable bruising on her arm and neck. What could be the possible explanation for these symptoms?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The combination of extensive dental caries, multiple abscesses, and noticeable bruising on the arm and neck in a four-year-old child could be indicative of child abuse and neglect. The dental caries and abscesses suggest a lack of proper oral hygiene and dental care, while the bruising could be a result of physical abuse. While hemophilia, leukemia, and vitamin K deficiency can also cause bruising, they would not typically result in extensive dental caries and multiple abscesses.",
      choices: [
        {
          id: "c1",
          content: "Child abuse and neglect",
          explanation: "Correct!",
          question_id: "q275",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Hemophilia",
          explanation: "Incorrect.",
          question_id: "q275",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Leukemia",
          explanation: "Incorrect.",
          question_id: "q275",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Vitamin K deficiency",
          explanation: "Incorrect.",
          question_id: "q275",
          is_correct: false,
        },
      ],
    },
    {
      id: "q276",
      content:
        "In a patient with a thin scalloped gingival phenotype who is planning to undergo orthodontic treatment, what complication might arise if the gingival phenotype is not taken into consideration?",
      category_id: "geography",
      image_url: "",
      explanation:
        "A thin scalloped gingival phenotype is more prone to gingival recession, especially when subjected to orthodontic forces. This is because the thin, fragile gingival tissue is less resistant to mechanical stress and can easily recede, exposing the root surface. Therefore, it is crucial to consider the gingival phenotype before initiating orthodontic treatment to prevent such complications.",
      choices: [
        {
          id: "c1",
          content: "Gingival recession",
          explanation: "Correct!",
          question_id: "q276",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Gingival enlargement",
          explanation: "Incorrect.",
          question_id: "q276",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Internal root resorption",
          explanation: "Incorrect.",
          question_id: "q276",
          is_correct: false,
        },
        {
          id: "c4",
          content: "External root resorption",
          explanation: "Incorrect.",
          question_id: "q276",
          is_correct: false,
        },
      ],
    },
    {
      id: "q277",
      content:
        "Which of the following is a type of resorbable sealer used in endodontic treatment?",
      category_id: "geography",
      image_url: "",
      explanation:
        "A resorbable sealer is a type of dental material that is used to fill the space within the root canal after it has been cleaned. Bioceramic sealers are considered resorbable and are often used in endodontic treatment due to their excellent sealing ability, biocompatibility, and ability to promote healing.",
      choices: [
        {
          id: "c1",
          content: "Bioceramic sealer",
          explanation: "Correct!",
          question_id: "q277",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Resin-based sealer",
          explanation: "Incorrect.",
          question_id: "q277",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Glass Ionomer Cement (GIC)",
          explanation: "Incorrect.",
          question_id: "q277",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Zinc Oxide Eugenol (ZOE)",
          explanation: "Incorrect.",
          question_id: "q277",
          is_correct: false,
        },
      ],
    },
    {
      id: "q279",
      content:
        "In the case of a patient presenting with angular cheilitis, which dietary supplement would be most appropriate to recommend?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Angular cheilitis is often associated with iron deficiency anemia, therefore, iron supplements would be the most appropriate recommendation. Zinc, calcium, and vitamin C are not typically associated with the treatment or prevention of angular cheilitis.",
      choices: [
        {
          id: "c1",
          content: "Zinc",
          explanation: "Incorrect.",
          question_id: "q279",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Iron",
          explanation: "Correct!",
          question_id: "q279",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Calcium",
          explanation: "Incorrect.",
          question_id: "q279",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Vitamin C",
          explanation: "Incorrect.",
          question_id: "q279",
          is_correct: false,
        },
      ],
    },
    {
      id: "q283",
      content:
        "If a patient with Down syndrome is unable to comprehend the explanation of the treatment plan, who is legally responsible for signing the consent form?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In cases where a patient is unable to comprehend the explanation of the treatment plan due to a condition such as Down syndrome, the legal responsibility for signing the consent form falls on the parents or legal guardians. Siblings, friends, or the dentist themselves are not legally authorized to provide consent on behalf of the patient.",
      choices: [
        {
          id: "c1",
          content: "Parents",
          explanation: "Correct!",
          question_id: "q283",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Patient's sibling",
          explanation: "Incorrect.",
          question_id: "q283",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Patient's friend",
          explanation: "Incorrect.",
          question_id: "q283",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Dentist",
          explanation: "Incorrect.",
          question_id: "q283",
          is_correct: false,
        },
      ],
    },
    {
      id: "q284",
      content:
        "A 13-year-old patient presents with an ankylosed primary second molar and there is no successor tooth visible on the radiograph. What is the most appropriate course of action?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "In a case where a 13-year-old patient has an ankylosed primary second molar with no successor tooth visible on the radiograph, the most appropriate course of action would be to refer the patient to a specialist for further evaluation. Extraction could potentially lead to space loss and orthodontic treatment may not be feasible or appropriate without a successor tooth. Observation and regular follow-ups could be an option, but without a specialist's evaluation, it may lead to complications.",
      choices: [
        {
          id: "c1",
          content: "Extraction of the ankylosed tooth",
          explanation: "Incorrect.",
          question_id: "q284",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Referral to a specialist for further evaluation",
          explanation: "Correct!",
          question_id: "q284",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Orthodontic treatment to correct the issue",
          explanation: "Incorrect.",
          question_id: "q284",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Observation and regular follow-ups",
          explanation: "Incorrect.",
          question_id: "q284",
          is_correct: false,
        },
      ],
    },
    {
      id: "q285",
      content:
        "Which syndrome is characterized by the presence of micrognathia, a large tongue, and cleft lip/palate in a patient?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Pierre Robin Syndrome is a condition present at birth, in which the infant has a smaller than normal lower jaw (micrognathia), a tongue that falls back in the throat and obstructs the airways (glossoptosis), and difficulty breathing. Some children with this syndrome also have a cleft lip and palate.",
      choices: [
        {
          id: "c1",
          content: "Pierre Robin Syndrome",
          explanation: "Correct!",
          question_id: "q285",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Down Syndrome",
          explanation: "Incorrect.",
          question_id: "q285",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Marfan Syndrome",
          explanation: "Incorrect.",
          question_id: "q285",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Turner Syndrome",
          explanation: "Incorrect.",
          question_id: "q285",
          is_correct: false,
        },
      ],
    },
    {
      id: "q286",
      content:
        "What is the most likely diagnosis for a 14-month-old child presenting with a bluish swelling in the alveolar region?",
      category_id: "geography",
      image_url: "",
      explanation:
        "An eruption hematoma, also known as an eruption cyst, is a bluish swelling that appears in the alveolar region when a tooth is about to erupt. It is caused by a fluid build-up in the soft tissues above the erupting tooth. Bohn's nodules, Epstein pearls, and dental abscesses do not present as a bluish swelling in the alveolar region.",
      choices: [
        {
          id: "c1",
          content: "Eruption hematoma",
          explanation: "Correct!",
          question_id: "q286",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Bohn's nodule",
          explanation: "Incorrect.",
          question_id: "q286",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Epstein pearl",
          explanation: "Incorrect.",
          question_id: "q286",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Dental abscess",
          explanation: "Incorrect.",
          question_id: "q286",
          is_correct: false,
        },
      ],
    },
    {
      id: "q287",
      content:
        "During which phase of tooth formation does a peg-shaped lateral incisor take its shape?",
      category_id: "geography",
      image_url: "",
      explanation:
        "A peg-shaped lateral incisor takes its shape during the morphodifferentiation phase of tooth formation. This phase is when the basic shape of the tooth crown is established. The other phases, initiation, proliferation, and histodifferentiation, are involved in the beginning of tooth development, cell multiplication, and cell differentiation respectively.",
      choices: [
        {
          id: "c1",
          content: "Initiation phase",
          explanation: "Incorrect.",
          question_id: "q287",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Proliferation phase",
          explanation: "Incorrect.",
          question_id: "q287",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Histodifferentiation phase",
          explanation: "Incorrect.",
          question_id: "q287",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Morphodifferentiation phase",
          explanation: "Correct!",
          question_id: "q287",
          is_correct: true,
        },
      ],
    },
    {
      id: "q288",
      content:
        "What is the dental condition called where the clinical appearance resembles two teeth occupying the same space, but there is no loss of teeth and the total number of teeth remains normal?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Gemination is a dental condition where a single tooth bud attempts to divide, resulting in a tooth that appears to be two teeth in the same place, but is counted as one because it arises from a single tooth bud. Fusion, on the other hand, involves the union of two normally separated tooth buds, which can lead to a decrease in the total number of teeth. Dens invaginatus and dens evaginatus are developmental dental anomalies affecting the shape of the teeth, but they do not result in the appearance of two teeth in the same place.",
      choices: [
        {
          id: "c1",
          content: "Gemination",
          explanation: "Correct!",
          question_id: "q288",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Fusion",
          explanation: "Incorrect.",
          question_id: "q288",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Dens invaginatus",
          explanation: "Incorrect.",
          question_id: "q288",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Dens evaginatus",
          explanation: "Incorrect.",
          question_id: "q288",
          is_correct: false,
        },
      ],
    },
    {
      id: "q289",
      content:
        "When taking a dental radiograph, where is the appropriate position for the operator to stand?",
      category_id: "geography",
      image_url: "",
      explanation:
        "When taking a dental radiograph, the operator should stand behind the radiographic cone. This position minimizes the operator's exposure to radiation. Standing in front of the cone, beside the patient, or near the radiographic film would increase the operator's risk of radiation exposure.",
      choices: [
        {
          id: "c1",
          content: "Behind the radiographic cone",
          explanation: "Correct!",
          question_id: "q289",
          is_correct: true,
        },
        {
          id: "c2",
          content: "In front of the radiographic cone",
          explanation: "Incorrect.",
          question_id: "q289",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Beside the patient",
          explanation: "Incorrect.",
          question_id: "q289",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Near the radiographic film",
          explanation: "Incorrect.",
          question_id: "q289",
          is_correct: false,
        },
      ],
    },
    {
      id: "q290",
      content:
        "A pregnant patient in her third trimester is experiencing severe pain and has been unable to sleep for three nights due to pulpitis. What is the most appropriate course of action?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In the case of a pregnant patient with severe pulpitis, the most appropriate course of action is to take the necessary radiographs during treatment using a lead apron for protection. This is because untreated pulpitis can lead to more serious complications, and the use of a lead apron minimizes the risk of radiation exposure to the fetus. Administering analgesics and deferring treatment could prolong the patient's discomfort, while performing a root canal treatment without radiography or extracting the tooth could potentially lead to unnecessary risks or complications.",
      choices: [
        {
          id: "c1",
          content:
            "Administer analgesics and defer treatment until after delivery",
          explanation: "Incorrect.",
          question_id: "q290",
          is_correct: false,
        },
        {
          id: "c2",
          content:
            "Perform root canal treatment without the use of radiography",
          explanation: "Incorrect.",
          question_id: "q290",
          is_correct: false,
        },
        {
          id: "c3",
          content:
            "Take the necessary radiographs during treatment using a lead apron for protection",
          explanation: "Correct!",
          question_id: "q290",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Extract the affected tooth",
          explanation: "Incorrect.",
          question_id: "q290",
          is_correct: false,
        },
      ],
    },
    {
      id: "q291",
      content:
        "A patient, after undergoing orthodontic treatment, presents with short crowns and a gummy smile. The patient wishes to improve their smile and it is noted that there is a 6 mm distance to the bone. What would be the most appropriate treatment?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In this case, the patient has a gummy smile and short crowns, which indicates excessive gingival display. A Lefort I osteotomy for superior repositioning (impaction) would be the most appropriate treatment. This surgical procedure involves moving the maxilla upwards (impaction) to reduce the amount of gingival display, thus improving the patient's smile. A gingivectomy or crown lengthening procedure would not be suitable as these procedures would not address the underlying skeletal issue.",
      choices: [
        {
          id: "c1",
          content: "Performing a gingivectomy",
          explanation: "Incorrect.",
          question_id: "q291",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Crown lengthening procedure",
          explanation: "Incorrect.",
          question_id: "q291",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Lefort I osteotomy for superior repositioning (impaction)",
          explanation: "Correct!",
          question_id: "q291",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Orthodontic treatment adjustment",
          explanation: "Incorrect.",
          question_id: "q291",
          is_correct: false,
        },
      ],
    },
    {
      id: "q292",
      content:
        "A patient diagnosed with Hemophilia A requires a surgical procedure. What is the most appropriate treatment to administer to this patient prior to the surgery?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Hemophilia A is a bleeding disorder caused by a deficiency of Factor VIII. Therefore, prior to any surgical procedure, a patient with Hemophilia A should be administered Factor VIII to prevent excessive bleeding.",
      choices: [
        {
          id: "c1",
          content: "Factor VII",
          explanation: "Incorrect.",
          question_id: "q292",
          is_correct: false,
        },
        {
          id: "c2",
          content: "An antibiotic",
          explanation: "Incorrect.",
          question_id: "q292",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Perform surgery with standard precautions",
          explanation: "Incorrect.",
          question_id: "q292",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Factor VIII",
          explanation: "Correct!",
          question_id: "q292",
          is_correct: true,
        },
      ],
    },
    {
      id: "q293",
      content:
        "Which blood test would you order for a patient who presents with blood oozing and petechiae in the palate?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The presence of blood oozing and petechiae in the palate could indicate a bleeding disorder. A Partial Thromboplastin Time (PTT) test is used to assess the body's ability to form a blood clot, making it the appropriate test in this scenario. The INR is used to monitor the effectiveness of blood-thinning medications, not to diagnose bleeding disorders. ALT is a liver function test and would not be relevant in this case. A CBC could potentially provide useful information about the patient's overall health, but it would not be as specific as a PTT for diagnosing a potential bleeding disorder.",
      choices: [
        {
          id: "c1",
          content: "International Normalized Ratio (INR)",
          explanation: "Incorrect.",
          question_id: "q293",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Partial Thromboplastin Time (PTT)",
          explanation: "Correct!",
          question_id: "q293",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Alanine Aminotransferase (ALT)",
          explanation: "Incorrect.",
          question_id: "q293",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Complete Blood Count (CBC)",
          explanation: "Incorrect.",
          question_id: "q293",
          is_correct: false,
        },
      ],
    },
    {
      id: "q294",
      content:
        "A female patient presents with an erythematous lesion surrounded by a white halo in the buccal mucosa and the palate. Which tests would be most appropriate to order in this case?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The description of an erythematous lesion surrounded by a white halo in the buccal mucosa and the palate is suggestive of Sjögren's syndrome, an autoimmune disease. The most common tests ordered for suspected Sjögren's syndrome are Antinuclear Antibodies (ANA) and Anti-Ro (SSA). ANA is a general test for autoimmune diseases, while Anti-Ro is more specific for Sjögren's syndrome.",
      choices: [
        {
          id: "c1",
          content: "a. Anti-Deoxyribonucleic Acid (Anti-DNA)",
          explanation: "Incorrect.",
          question_id: "q294",
          is_correct: false,
        },
        {
          id: "c2",
          content: "b. Antinuclear Antibodies (ANA) and Rheumatoid Factor (RF)",
          explanation: "Incorrect.",
          question_id: "q294",
          is_correct: false,
        },
        {
          id: "c3",
          content: "c. Antinuclear Antibodies (ANA) and Anti-Ro",
          explanation: "Correct!",
          question_id: "q294",
          is_correct: true,
        },
        {
          id: "c4",
          content:
            "d. Anti-Deoxyribonucleic Acid (Anti-DNA) and Anti-Smith (Anti-Sm)",
          explanation: "Incorrect.",
          question_id: "q294",
          is_correct: false,
        },
      ],
    },
    {
      id: "q295",
      content:
        "A pediatric patient presents with a bluish, painless swelling in her lip. What is the most likely diagnosis?",
      category_id: "geography",
      image_url: "",
      explanation:
        "A mucocele is a common oral lesion that presents as a bluish, painless swelling, often on the lower lip. It is caused by the rupture of a salivary gland duct and subsequent pooling of mucus in the surrounding tissues. A ranula is a similar lesion but is typically located on the floor of the mouth. Lipomas are benign fatty tumors and do not typically present as bluish. Hemangiomas are benign tumors of blood vessels, but they are usually red or purple in color.",
      choices: [
        {
          id: "c1",
          content: "Ranula",
          explanation: "Incorrect.",
          question_id: "q295",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Mucocele",
          explanation: "Correct!",
          question_id: "q295",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Lipoma",
          explanation: "Incorrect.",
          question_id: "q295",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Hemangioma",
          explanation: "Incorrect.",
          question_id: "q295",
          is_correct: false,
        },
      ],
    },
    {
      id: "q296",
      content:
        "If a patient presents with infraorbital ecchymosis and hematoma, which type of radiographic examination would be most appropriate to detect a possible fracture?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In the case of a suspected fracture, particularly in the facial region, a Computed Tomography (CT) scan is the most appropriate choice. CT scans provide detailed images of different types of tissue, including the lungs, bones, and blood vessels. They are more detailed than regular X-rays and can show the exact location and extent of the fracture, which is crucial for planning the treatment. Panoramic radiographs, submentovertex position radiographs, and MRIs, while useful in some cases, do not provide the same level of detail for bone fractures as a CT scan.",
      choices: [
        {
          id: "c1",
          content: "Panoramic radiograph",
          explanation: "Incorrect.",
          question_id: "q296",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Computed Tomography (CT)",
          explanation: "Correct!",
          question_id: "q296",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Submentovertex position radiograph",
          explanation: "Incorrect.",
          question_id: "q296",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Magnetic Resonance Imaging (MRI)",
          explanation: "Incorrect.",
          question_id: "q296",
          is_correct: false,
        },
      ],
    },
    {
      id: "q297",
      content:
        "Which term is used to describe inflammation that occurs in the interdental region?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Papillary inflammation refers to inflammation that occurs in the interdental papilla, which is the portion of the gums that fills the space between two teeth. Marginal inflammation refers to inflammation of the marginal gingiva, which is the edge of the gum surrounding the crown of the tooth. Attached gingiva inflammation would refer to inflammation of the part of the gum that is tightly bound to the underlying bone. In the context of the question, the correct term for interdental inflammation is 'Papillary inflammation'.",
      choices: [
        {
          id: "c1",
          content: "Papillary inflammation",
          explanation: "Correct!",
          question_id: "q297",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Marginal inflammation",
          explanation: "Incorrect.",
          question_id: "q297",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Attached gingiva inflammation",
          explanation: "Incorrect.",
          question_id: "q297",
          is_correct: false,
        },
        {
          id: "c4",
          content: "None of the above",
          explanation: "Incorrect.",
          question_id: "q297",
          is_correct: false,
        },
      ],
    },
    {
      id: "q298",
      content:
        "A histology report of a biopsy indicates the presence of suprabasal epidermal acantholysis, clefting, and blister formation. Which condition does this report most likely suggest?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The histological features of suprabasal epidermal acantholysis, clefting, and blister formation are characteristic of Pemphigus Vulgaris, an autoimmune blistering disease. In contrast, Bullous Pemphigoid, another blistering disease, typically shows subepidermal blistering. Erythema Multiforme and Lichen Planus do not typically present with these histological features.",
      choices: [
        {
          id: "c1",
          content: "Bullous Pemphigoid",
          explanation: "Incorrect.",
          question_id: "q298",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Pemphigus Vulgaris",
          explanation: "Correct!",
          question_id: "q298",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Erythema Multiforme",
          explanation: "Incorrect.",
          question_id: "q298",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Lichen Planus",
          explanation: "Incorrect.",
          question_id: "q298",
          is_correct: false,
        },
      ],
    },
    {
      id: "q299",
      content:
        "A patient with a history of infective endocarditis and an allergy to penicillin requires a prophylactic antibiotic. Which of the following would be the most appropriate choice?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In patients with a history of infective endocarditis who are allergic to penicillin, Clindamycin is often used as a prophylactic antibiotic. Amoxicillin and Ampicillin are penicillin-based antibiotics and therefore should be avoided in patients with a known allergy. Cyclosporine is an immunosuppressant, not an antibiotic, and thus is not appropriate for this use.",
      choices: [
        {
          id: "c1",
          content: "Amoxicillin",
          explanation: "Incorrect.",
          question_id: "q299",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Ampicillin",
          explanation: "Incorrect.",
          question_id: "q299",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Cyclosporine",
          explanation: "Incorrect.",
          question_id: "q299",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Clindamycin",
          explanation: "Correct!",
          question_id: "q299",
          is_correct: true,
        },
      ],
    },
    {
      id: "q300",
      content:
        "A patient presents with discomfort from dental crowns that were placed in a private clinic three months ago. Upon examination, you discover an open margin. What is the most appropriate course of action?",
      category_id: "geography",
      image_url: "",
      explanation:
        "As a professional, it is inappropriate to criticize the work of another dentist in front of a patient. Instead, the best course of action is to explain the situation to the patient in a clear and non-judgmental manner, discussing the possible causes of the open margin and the steps that can be taken to rectify the issue.",
      choices: [
        {
          id: "c1",
          content: "Criticize the defect in front of the patient",
          explanation: "Incorrect.",
          question_id: "q300",
          is_correct: false,
        },
        {
          id: "c2",
          content:
            "Criticize the private clinic and the doctor who performed the procedure",
          explanation: "Incorrect.",
          question_id: "q300",
          is_correct: false,
        },
        {
          id: "c3",
          content:
            "Refrain from criticizing and explain the situation to the patient",
          explanation: "Correct!",
          question_id: "q300",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Ignore the issue and reassure the patient",
          explanation: "Incorrect.",
          question_id: "q300",
          is_correct: false,
        },
      ],
    },
    {
      id: "q301",
      content:
        "A patient presents with a chipped ceramic of a Porcelain-Fused-to-Metal (PFM) crown on tooth number 46. Upon examination, you also notice wearing of the occlusal surface. What could be the most likely cause of these observations?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The most likely cause of the chipped ceramic and occlusal surface wear in a PFM crown is occlusal trauma. This can occur when there is excessive force applied to the tooth, such as during bruxism (teeth grinding) or clenching. Insufficient thickness of the metal or inadequate strength of the ceramic could also lead to chipping, but these would not typically cause occlusal surface wear. Loss of cement seal could lead to loosening of the crown, but not chipping or wear of the occlusal surface.",
      choices: [
        {
          id: "c1",
          content: "Occlusal trauma",
          explanation: "Correct!",
          question_id: "q301",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Insufficient thickness of the metal component of the crown",
          explanation: "Incorrect.",
          question_id: "q301",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Inadequate strength of the ceramic component of the crown",
          explanation: "Incorrect.",
          question_id: "q301",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Loss of cement seal",
          explanation: "Incorrect.",
          question_id: "q301",
          is_correct: false,
        },
      ],
    },
    {
      id: "q302",
      content: "The image provided is associated with which type of poisoning?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "The correct answer is Lead poisoning. Lead poisoning is a type of metal poisoning caused by lead in the body. The brain is the most sensitive. Symptoms may include abdominal pain, constipation, headaches, irritability, memory problems, inability to have children, and tingling in the hands and feet. It causes almost 10% of intellectual disability of otherwise unknown cause and can result in behavioral problems. Some of the effects are permanent. In severe cases anemia, seizures, coma, or death may occur.",
      choices: [
        {
          id: "c1",
          content: "Lead poisoning",
          explanation: "Correct!",
          question_id: "q302",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Iron poisoning",
          explanation: "Incorrect.",
          question_id: "q302",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Bismuth poisoning",
          explanation: "Incorrect.",
          question_id: "q302",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Copper poisoning",
          explanation: "Incorrect.",
          question_id: "q302",
          is_correct: false,
        },
      ],
    },
    {
      id: "q303",
      content:
        "In a case where there is grade 1 furcation involvement accompanied by an enamel projection, what would be the most appropriate treatment?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In cases of grade 1 furcation involvement with enamel projection, the most appropriate treatment is deep scaling and root planing. This is because grade 1 furcation involvement indicates that the furcation is not completely exposed, and the condition can be managed non-surgically. Deep scaling and root planing can remove the plaque and calculus, and smooth the root surfaces, which helps in the healing of the periodontal tissues. Odontoplasty is not the best option as it involves reshaping the teeth, which is not necessary in this case. Guided Tissue Regeneration (GTR) is a surgical procedure used to regenerate lost periodontal structures, which is also not necessary in this case. Tooth extraction is the last resort when other treatments fail.",
      choices: [
        {
          id: "c1",
          content: "Tooth Extraction",
          explanation: "Incorrect.",
          question_id: "q303",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Odontoplasty",
          explanation: "Incorrect.",
          question_id: "q303",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Guided Tissue Regeneration (GTR)",
          explanation: "Incorrect.",
          question_id: "q303",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Deep Scaling and Root Planing",
          explanation: "Correct!",
          question_id: "q303",
          is_correct: true,
        },
      ],
    },
    {
      id: "q304",
      content:
        "In a case where there is grade 2 furcation involvement, what would be the most appropriate treatment?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In the case of grade 2 furcation involvement, scaling and root planing is typically the first line of treatment. This non-surgical periodontal therapy helps to remove etiologic agents such as dental plaque and tartar, which can cause inflammatory periodontal diseases. Open flap debridement surgery may be considered if non-surgical therapy is unsuccessful. Extraction is usually the last resort, while root canal treatment is not directly related to furcation involvement.",
      choices: [
        {
          id: "c1",
          content: "Extraction of the tooth",
          explanation: "Incorrect.",
          question_id: "q304",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Open flap debridement surgery",
          explanation: "Incorrect.",
          question_id: "q304",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Scaling and root planing",
          explanation: "Correct!",
          question_id: "q304",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Root canal treatment",
          explanation: "Incorrect.",
          question_id: "q304",
          is_correct: false,
        },
      ],
    },
    {
      id: "q305",
      content:
        "What is the primary purpose of the master file in endodontic treatment?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The master file in endodontic treatment is primarily used to prepare for the master cone of obturation. This is the process of filling the root canal to prevent the re-entry or survival of bacteria that can cause infection. While the master file can also help maintain patency and determine the working length, its primary purpose is to prepare for obturation.",
      choices: [
        {
          id: "c1",
          content: "To maintain patency",
          explanation: "Incorrect.",
          question_id: "q305",
          is_correct: false,
        },
        {
          id: "c2",
          content: "To determine the working length",
          explanation: "Incorrect.",
          question_id: "q305",
          is_correct: false,
        },
        {
          id: "c3",
          content: "To prepare for the master cone of obturation",
          explanation: "Correct!",
          question_id: "q305",
          is_correct: true,
        },
        {
          id: "c4",
          content: "To remove pulp tissue",
          explanation: "Incorrect.",
          question_id: "q305",
          is_correct: false,
        },
      ],
    },
    {
      id: "q316",
      content:
        "A patient who is currently fasting inquires whether the administration of local anesthesia will interrupt her fast. How should you respond?",
      category_id: "geography",
      image_url: "",
      explanation:
        "As a dental professional, it is not within your purview to provide religious advice. However, it is generally accepted that local anesthesia does not break a fast as it is not a form of nutrition. It is absorbed into the bloodstream and does not pass through the digestive system. However, if a patient has concerns about the intersection of their medical treatment and religious practices, it is appropriate to advise them to seek guidance from a religious authority or similar resource.",
      choices: [
        {
          id: "c1",
          content: "Respond with uncertainty, stating you do not know",
          explanation: "Incorrect.",
          question_id: "q316",
          is_correct: false,
        },
        {
          id: "c2",
          content:
            "Refer her to a religious authority or similar resource for guidance",
          explanation: "Incorrect.",
          question_id: "q316",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Assure her that local anesthesia does not break a fast",
          explanation: "Correct!",
          question_id: "q316",
          is_correct: true,
        },
        {
          id: "c4",
          content:
            "Advise her to postpone her dental procedure until after her fasting period",
          explanation: "Incorrect.",
          question_id: "q316",
          is_correct: false,
        },
      ],
    },
    {
      id: "q317",
      content:
        "A dentist decided to administer a new hypertension medication to 20 patients without informing them about the change in their treatment plan. Which ethical principle did the dentist violate?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The principle of informed consent requires that patients be fully informed about the nature of their treatment, including any changes, and that they agree to it. In this case, the dentist violated this principle by not informing the patients about the new hypertension medication and obtaining their consent before administering it.",
      choices: [
        {
          id: "c1",
          content:
            "Approval from the Institutional Bioethics and Health Committee",
          explanation: "Incorrect.",
          question_id: "q317",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Principle of informed consent",
          explanation: "Correct!",
          question_id: "q317",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Principle of non-maleficence",
          explanation: "Incorrect.",
          question_id: "q317",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Principle of justice",
          explanation: "Incorrect.",
          question_id: "q317",
          is_correct: false,
        },
      ],
    },
    {
      id: "q318",
      content:
        "If tooth number 46 is missing and tooth number 16 is over erupted, and you wish to perform an implant procedure, but the interocclusal space is only 5 mm, which type of implant would be most suitable?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In cases where the interocclusal space is limited, a screw-retained implant is often the most suitable choice. This is because screw-retained implants do not require the additional space needed for cement, and they can be placed more precisely in a limited space. Additionally, they allow for easy retrievability in case of complications or for maintenance purposes.",
      choices: [
        {
          id: "c1",
          content: "A screw-retained implant",
          explanation: "Correct!",
          question_id: "q318",
          is_correct: true,
        },
        {
          id: "c2",
          content: "A cement-retained implant",
          explanation: "Incorrect.",
          question_id: "q318",
          is_correct: false,
        },
        {
          id: "c3",
          content: "A screw-retained implant with a divergent abutment",
          explanation: "Incorrect.",
          question_id: "q318",
          is_correct: false,
        },
        {
          id: "c4",
          content: "A cement-retained implant with a divergent abutment",
          explanation: "Incorrect.",
          question_id: "q318",
          is_correct: false,
        },
      ],
    },
    {
      id: "q319",
      content:
        "If a patient has aesthetic concerns, which type of clasp should not be used in their dental treatment?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The Ring clasp is not typically used when a patient has aesthetic concerns. This is because the Ring clasp is more visible and thus less aesthetically pleasing compared to other types of clasps such as the Rest and Proximal Plate (RPI) clasp or the Aker clasp.",
      choices: [
        {
          id: "c1",
          content: "Rest and Proximal Plate (RPI) clasp",
          explanation: "Incorrect.",
          question_id: "q319",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Ring clasp",
          explanation: "Correct!",
          question_id: "q319",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Aker clasp",
          explanation: "Incorrect.",
          question_id: "q319",
          is_correct: false,
        },
      ],
    },
    {
      id: "q320",
      content:
        "Which condition is typically associated with a bullous lesion that contains prickle cells?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Pemphigus Vulgaris is a condition characterized by the presence of bullous lesions that contain prickle cells. This is due to the loss of adhesion between keratinocytes, leading to the formation of intraepithelial blisters. Bullous Pemphigoid, on the other hand, is characterized by subepidermal blisters and does not typically involve prickle cells. Erythema Multiforme and Lichen Planus are other skin conditions, but they are not typically associated with bullous lesions containing prickle cells.",
      choices: [
        {
          id: "c1",
          content: "Bullous Pemphigoid",
          explanation: "Incorrect.",
          question_id: "q320",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Pemphigus Vulgaris",
          explanation: "Correct!",
          question_id: "q320",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Erythema Multiforme",
          explanation: "Incorrect.",
          question_id: "q320",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Lichen Planus",
          explanation: "Incorrect.",
          question_id: "q320",
          is_correct: false,
        },
      ],
    },
    {
      id: "q321",
      content:
        "What oral condition can be caused by the use of a mouthwash with a high alcohol concentration?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The use of mouthwash with a high alcohol concentration can lead to epithelial desquamation, a condition where the outermost layer of the oral mucosa peels off. This is due to the dehydrating effect of alcohol on the oral tissues. Lichen planus, oral candidiasis, and gingivitis are not typically associated with the use of high-alcohol mouthwash.",
      choices: [
        {
          id: "c1",
          content: "Lichen planus",
          explanation: "Incorrect.",
          question_id: "q321",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Epithelial desquamation",
          explanation: "Correct!",
          question_id: "q321",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Oral candidiasis",
          explanation: "Incorrect.",
          question_id: "q321",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Gingivitis",
          explanation: "Incorrect.",
          question_id: "q321",
          is_correct: false,
        },
      ],
    },
    {
      id: "q322",
      content:
        "What is the appropriate course of action for a dentist when a patient exhibits symptoms of angina during a procedure?",
      category_id: "geography",
      image_url: "",
      explanation:
        "When a patient exhibits symptoms of angina during a dental procedure, the appropriate response is to administer oxygen. This helps to increase the supply of oxygen to the heart muscle, which can alleviate the symptoms of angina. The other options, such as completing the extraction or repositioning the patient, may not address the immediate need for increased oxygen to the heart and could potentially exacerbate the patient's condition.",
      choices: [
        {
          id: "c1",
          content: "Administer oxygen to the patient",
          explanation: "Correct!",
          question_id: "q322",
          is_correct: true,
        },
        {
          id: "c2",
          content:
            "Complete the extraction procedure and then allow the patient to rest",
          explanation: "Incorrect.",
          question_id: "q322",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Position the patient upright",
          explanation: "Incorrect.",
          question_id: "q322",
          is_correct: false,
        },
        {
          id: "c4",
          content:
            "Elevate the patient's feet higher than their head and apply additional unspecified measures",
          explanation: "Incorrect.",
          question_id: "q322",
          is_correct: false,
        },
      ],
    },
    {
      id: "q323",
      content:
        "A 15-year-old patient presents with a family history of prolonged bleeding. Laboratory tests reveal prolonged Activated Partial Thromboplastin Time (APTT) and prolonged bleeding time, but normal platelet count. What is the most likely diagnosis?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The patient's symptoms and lab results suggest a diagnosis of Von Willebrand Disease. This is a genetic disorder that can lead to prolonged bleeding time due to a deficiency of Von Willebrand factor, a protein that helps platelets stick together and adhere to the walls of blood vessels. Despite the prolonged bleeding time, the platelet count remains normal. Hemophilia A also causes prolonged APTT but it is usually associated with a normal bleeding time. Thrombocytopenia would present with a decreased platelet count, which is not the case here. Disseminated Intravascular Coagulation (DIC) is a serious condition that causes abnormal blood clotting throughout the body's small blood vessels, and it is not consistent with the patient's symptoms and lab results.",
      choices: [
        {
          id: "c1",
          content: "Hemophilia A",
          explanation: "Incorrect.",
          question_id: "q323",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Thrombocytopenia",
          explanation: "Incorrect.",
          question_id: "q323",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Von Willebrand Disease",
          explanation: "Correct!",
          question_id: "q323",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Disseminated Intravascular Coagulation (DIC)",
          explanation: "Incorrect.",
          question_id: "q323",
          is_correct: false,
        },
      ],
    },
    {
      id: "q325",
      content:
        "You have decided to perform composite restorations for teeth number 24 and 25. Which is the most appropriate approach?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The most appropriate approach when performing composite restorations for teeth number 24 and 25 is to do each tooth separately in the same visit. This approach allows for proper isolation and control of the operative field for each tooth, ensuring the best possible outcome for the restoration. Performing both restorations in the same visit can lead to compromised isolation and control, which can negatively impact the quality of the restorations.",
      choices: [
        {
          id: "c1",
          content:
            "Perform composite restorations for both teeth in one visit and finish in another visit",
          explanation: "Incorrect.",
          question_id: "q325",
          is_correct: false,
        },
        {
          id: "c2",
          content:
            "Perform composite restoration for each tooth separately in the same visit",
          explanation: "Correct!",
          question_id: "q325",
          is_correct: true,
        },
        {
          id: "c3",
          content:
            "Perform composite restoration for each tooth separately in different visits",
          explanation: "Incorrect.",
          question_id: "q325",
          is_correct: false,
        },
        {
          id: "c4",
          content:
            "Perform composite restorations for both teeth and finish both in the same visit",
          explanation: "Incorrect.",
          question_id: "q325",
          is_correct: false,
        },
      ],
    },
    {
      id: "q326",
      content:
        "A patient who has received multiple injections for an Inferior Alveolar Nerve Block (IANB) presents with pain and swelling. In which space is the swelling most likely to be located?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The Inferior Alveolar Nerve Block (IANB) is a common injection technique used in dentistry. It is administered in the submandibular space, which is a potential space that can be involved in odontogenic infections. If multiple injections are given in this area, it can lead to inflammation and swelling in the submandibular space. The other options, sublingual, submasseteric, and subpterygomandibular spaces, are less likely to be involved in this scenario.",
      choices: [
        {
          id: "c1",
          content: "Submandibular space",
          explanation: "Correct!",
          question_id: "q326",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Sublingual space",
          explanation: "Incorrect.",
          question_id: "q326",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Submasseteric space",
          explanation: "Incorrect.",
          question_id: "q326",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Subpterygomandibular space",
          explanation: "Incorrect.",
          question_id: "q326",
          is_correct: false,
        },
      ],
    },
    {
      id: "q328",
      content:
        "A dentist procures antibiotics from a pharmacy and dispenses them to his patients, charging them each time. What ethical issue does this practice raise?",
      category_id: "geography",
      image_url: "",
      explanation:
        "This practice raises a conflict of interest. A conflict of interest occurs when a professional, in this case a dentist, has a personal or financial interest that could potentially influence their professional duties and judgment. In this scenario, the dentist is profiting from the sale of antibiotics, which could potentially influence their decision to prescribe them, even if they may not be necessary. This could lead to over-prescription and contribute to antibiotic resistance.",
      choices: [
        {
          id: "c1",
          content: "Conflict of interest",
          explanation: "Correct!",
          question_id: "q328",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Negligence",
          explanation: "Incorrect.",
          question_id: "q328",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Informed consent",
          explanation: "Incorrect.",
          question_id: "q328",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Patient autonomy",
          explanation: "Incorrect.",
          question_id: "q328",
          is_correct: false,
        },
      ],
    },
    {
      id: "q329",
      content:
        "A dentist was performing a procedure when he accidentally cut the patient's lips, causing severe bleeding. A surgeon was called in to suture the wound, after which the dentist apologized and provided post-procedure instructions. How would this situation be best classified?",
      category_id: "geography",
      image_url: "",
      explanation:
        "This situation is an example of malpractice. Malpractice refers to professional misconduct or unreasonable lack of skill. In this case, the dentist caused harm to the patient by accidentally cutting the patient's lips, which required the intervention of a surgeon. A 'near miss' would refer to a situation where an accident almost occurred but was avoided, which is not the case here.",
      choices: [
        {
          id: "c1",
          content: "Near miss",
          explanation: "Incorrect.",
          question_id: "q329",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Malpractice",
          explanation: "Correct!",
          question_id: "q329",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Incidental harm",
          explanation: "Incorrect.",
          question_id: "q329",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Adverse event",
          explanation: "Incorrect.",
          question_id: "q329",
          is_correct: false,
        },
      ],
    },
    {
      id: "q330",
      content:
        "If there is a 14 mm space available in a patient's mouth, how many dental implants can be ideally placed?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The ideal space for a single dental implant is around 3-4 mm. Therefore, in a 14 mm space, three implants can be ideally placed. Placing more implants in this space may lead to crowding and complications.",
      choices: [
        {
          id: "c1",
          content: "3 implants",
          explanation: "Correct!",
          question_id: "q330",
          is_correct: true,
        },
        {
          id: "c2",
          content: "4 implants",
          explanation: "Incorrect.",
          question_id: "q330",
          is_correct: false,
        },
        {
          id: "c3",
          content: "3.5 implants",
          explanation: "Incorrect.",
          question_id: "q330",
          is_correct: false,
        },
        {
          id: "c4",
          content: "5 implants",
          explanation: "Incorrect.",
          question_id: "q330",
          is_correct: false,
        },
      ],
    },
    {
      id: "q331",
      content:
        "What is the minimum recommended space in millimeters for a dental implant placement?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The minimum recommended space for a dental implant placement is 8 millimeters. This is to ensure that there is enough room for the implant to be placed without causing damage to the surrounding tissues and to allow for proper osseointegration. A space less than this may lead to complications such as implant failure or damage to the adjacent teeth.",
      choices: [
        {
          id: "c1",
          content: "4 millimeters",
          explanation: "Incorrect.",
          question_id: "q331",
          is_correct: false,
        },
        {
          id: "c2",
          content: "3.8 millimeters",
          explanation: "Incorrect.",
          question_id: "q331",
          is_correct: false,
        },
        {
          id: "c3",
          content: "6 millimeters",
          explanation: "Incorrect.",
          question_id: "q331",
          is_correct: false,
        },
        {
          id: "c4",
          content: "8 millimeters",
          explanation: "Correct!",
          question_id: "q331",
          is_correct: true,
        },
      ],
    },
    {
      id: "q334",
      content:
        "A patient presents with symptoms of headache accompanied by nausea and vomiting. Which type of headache is most likely responsible for these symptoms?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Migraine headaches are often accompanied by other symptoms such as nausea, vomiting, and sensitivity to light and sound. While tension-type and sinus headaches can cause discomfort, they are typically not associated with nausea and vomiting. Cluster headaches are severe headaches that occur in clusters or cyclical patterns, but are also not typically associated with nausea and vomiting.",
      choices: [
        {
          id: "c1",
          content: "Tension-type headache",
          explanation: "Incorrect.",
          question_id: "q334",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Cluster headache",
          explanation: "Incorrect.",
          question_id: "q334",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Migraine headache",
          explanation: "Correct!",
          question_id: "q334",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Sinus headache",
          explanation: "Incorrect.",
          question_id: "q334",
          is_correct: false,
        },
      ],
    },
    {
      id: "q335",
      content:
        "Upon examination, a patient presents with a periodontal-endodontic lesion. What factor will primarily determine the treatment approach, success of the treatment, or restorability of the tooth?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "The primary factor that determines the treatment approach, success of the treatment, or restorability of the tooth in a patient with a periodontal-endodontic lesion is the extent of dental caries. Dental caries, if extensive, can compromise the structural integrity of the tooth, making restoration difficult or impossible. Additionally, extensive caries can lead to pulp involvement, necessitating endodontic treatment. The severity of periodontal disease, need for root canal treatment, and presence of tooth decay are also important considerations, but the extent of caries is the primary determinant.",
      choices: [
        {
          id: "c1",
          content: "Extent of dental caries",
          explanation: "Correct!",
          question_id: "q335",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Severity of periodontal disease",
          explanation: "Incorrect.",
          question_id: "q335",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Need for root canal treatment",
          explanation: "Incorrect.",
          question_id: "q335",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Presence of tooth decay",
          explanation: "Incorrect.",
          question_id: "q335",
          is_correct: false,
        },
      ],
    },
    {
      id: "q336",
      content:
        "In pediatric patients, what level of caries assessment is typically associated with active white caries?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Active white caries in pediatric patients typically indicates a high caries risk assessment. This is due to the fact that active white caries are an active form of tooth decay, which suggests a high level of bacteria, poor oral hygiene, and potentially a diet high in sugars. Therefore, these patients are at a high risk of developing further dental caries.",
      choices: [
        {
          id: "c1",
          content: "High caries risk assessment",
          explanation: "Correct!",
          question_id: "q336",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Moderate caries risk assessment",
          explanation: "Incorrect.",
          question_id: "q336",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Low caries risk assessment",
          explanation: "Incorrect.",
          question_id: "q336",
          is_correct: false,
        },
        {
          id: "c4",
          content: "No caries risk assessment",
          explanation: "Incorrect.",
          question_id: "q336",
          is_correct: false,
        },
      ],
    },
    {
      id: "q337",
      content:
        "What are the local factors associated with an overhang restoration as seen in the provided image?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "An overhang restoration can lead to the accumulation of calculus due to the creation of a niche where plaque can accumulate and harden into calculus. This is a local factor associated with overhang restorations. The presence of Gram-negative bacteria, inadequate oral hygiene, and improper flossing technique are also potential factors, but they are not directly related to the overhang restoration itself.",
      choices: [
        {
          id: "c1",
          content: "Calculus accumulation",
          explanation: "Correct!",
          question_id: "q337",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Presence of Gram-negative bacteria",
          explanation: "Incorrect.",
          question_id: "q337",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Inadequate oral hygiene",
          explanation: "Incorrect.",
          question_id: "q337",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Improper flossing technique",
          explanation: "Incorrect.",
          question_id: "q337",
          is_correct: false,
        },
      ],
    },
    {
      id: "q338",
      content:
        "What should be the appropriate course of action if a patient experiences severe pain, bleeding, and swelling during irrigation with Sodium Hypochlorite (NaOCl)?",
      category_id: "geography",
      image_url: "",
      explanation:
        "If a patient experiences severe pain, bleeding, and swelling during irrigation with Sodium Hypochlorite (NaOCl), the immediate course of action should be to stop the procedure and irrigate with saline to dilute the NaOCl. The patient should be reassured and monitored for any further complications. Continuing with the same irrigation solution or administering an analgesic without addressing the cause of the pain could potentially exacerbate the situation. Immediate referral to a specialist without any intervention may not be necessary unless the situation does not improve or worsens.",
      choices: [
        {
          id: "c1",
          content: "Irrigation with saline and reassure the patient",
          explanation: "Correct!",
          question_id: "q338",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Continue with the same irrigation solution",
          explanation: "Incorrect.",
          question_id: "q338",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Administer an analgesic and continue with the procedure",
          explanation: "Incorrect.",
          question_id: "q338",
          is_correct: false,
        },
        {
          id: "c4",
          content:
            "Immediately refer the patient to a specialist without any intervention",
          explanation: "Incorrect.",
          question_id: "q338",
          is_correct: false,
        },
      ],
    },
    {
      id: "q339",
      content:
        "A pediatric patient presents to the dental clinic accompanied by his mother. The mother instructs the dentist to perform any necessary procedures that they deem necessary. What is the term for this type of agreement?",
      category_id: "geography",
      image_url: "",
      explanation:
        "This scenario describes a situation of implied consent. Implied consent is a form of consent which is not expressly granted by a person, but rather inferred from a person's actions, the facts and circumstances of a particular situation. In this case, the mother's instruction to the dentist to perform any necessary procedures implies her consent for the dentist to do so.",
      choices: [
        {
          id: "c1",
          content: "Informed consent",
          explanation: "Incorrect.",
          question_id: "q339",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Implied consent",
          explanation: "Correct!",
          question_id: "q339",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Expressed consent",
          explanation: "Incorrect.",
          question_id: "q339",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Uninformed consent",
          explanation: "Incorrect.",
          question_id: "q339",
          is_correct: false,
        },
      ],
    },
    {
      id: "q340",
      content:
        "A pediatric patient underwent an extraction of a lower primary molar and returned after one day complaining of swelling and pain in the lip. What would be the most appropriate management for this situation?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In this scenario, the patient is likely experiencing post-operative swelling and pain, which is a common occurrence after tooth extraction. The most appropriate management would be to reassure the patient and prescribe an analgesic to manage the pain. Antibiotics are not necessary unless there are signs of infection, and referral to an oral surgeon or hospitalization would be an overreaction to a common post-operative symptom.",
      choices: [
        {
          id: "c1",
          content: "Reassure the patient and prescribe an analgesic",
          explanation: "Correct!",
          question_id: "q340",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Prescribe an antibiotic and recommend a follow-up visit",
          explanation: "Incorrect.",
          question_id: "q340",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Refer the patient to an oral surgeon",
          explanation: "Incorrect.",
          question_id: "q340",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Recommend immediate hospitalization",
          explanation: "Incorrect.",
          question_id: "q340",
          is_correct: false,
        },
      ],
    },
    {
      id: "q341",
      content:
        "A pediatric patient was provided with a treatment plan by a dentist and the treatment was completed. However, the patient returned after some time with swelling and abscesses in his teeth. What type of child maltreatment does this scenario most likely represent?",
      category_id: "geography",
      image_url: "",
      explanation:
        "This scenario is indicative of neglect, a form of child maltreatment. Neglect refers to the failure of a parent, guardian, or other caregiver to provide for a child's basic needs, which includes adequate dental care. In this case, the recurrence of dental issues such as swelling and abscesses after treatment suggests that the child's oral health is not being properly maintained, pointing towards neglect.",
      choices: [
        {
          id: "c1",
          content: "Neglect",
          explanation: "Correct!",
          question_id: "q341",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Sexual abuse",
          explanation: "Incorrect.",
          question_id: "q341",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Physical abuse",
          explanation: "Incorrect.",
          question_id: "q341",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Emotional abuse",
          explanation: "Incorrect.",
          question_id: "q341",
          is_correct: false,
        },
      ],
    },
    {
      id: "q342",
      content:
        "Which type of tooth fracture involves the enamel and dentin, but does not result in pulp exposure?",
      category_id: "geography",
      image_url: "",
      explanation:
        "An uncomplicated crown fracture involves the enamel and dentin, but does not result in pulp exposure. A complicated crown fracture, on the other hand, involves the enamel, dentin, and pulp. A root fracture involves the root of the tooth, and an enamel fracture only involves the enamel.",
      choices: [
        {
          id: "c1",
          content: "Complicated crown fracture",
          explanation: "Incorrect.",
          question_id: "q342",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Uncomplicated crown fracture",
          explanation: "Correct!",
          question_id: "q342",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Root fracture",
          explanation: "Incorrect.",
          question_id: "q342",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Enamel fracture",
          explanation: "Incorrect.",
          question_id: "q342",
          is_correct: false,
        },
      ],
    },
    {
      id: "q343",
      content: "What is a common clinical sign of a mandibular fracture?",
      category_id: "geography",
      image_url: "",
      explanation:
        "A common clinical sign of a mandibular fracture is a problem in occlusion. This is due to the misalignment of the mandible and maxilla, which affects the normal bite of the patient. Difficulty in swallowing, increased salivation, and loss of taste sensation are not typically associated with mandibular fractures.",
      choices: [
        {
          id: "c1",
          content: "Difficulty in swallowing",
          explanation: "Incorrect.",
          question_id: "q343",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Problem in occlusion",
          explanation: "Correct!",
          question_id: "q343",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Increased salivation",
          explanation: "Incorrect.",
          question_id: "q343",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Loss of taste sensation",
          explanation: "Incorrect.",
          question_id: "q343",
          is_correct: false,
        },
      ],
    },
    {
      id: "q344",
      content:
        "If you suspect a patient has a Vertical Root Fracture (VRF), what would be the initial diagnostic procedure to confirm your suspicion?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The initial diagnostic procedure for a suspected Vertical Root Fracture (VRF) is a Periapical radiograph (PA). This is because a PA radiograph provides a detailed view of the individual teeth and the surrounding bone, which can help in identifying any fractures. Although a Cone Beam Computed Tomography (CBCT) can also provide a detailed view, it is usually reserved for more complex cases where a PA radiograph is not sufficient.",
      choices: [
        {
          id: "c1",
          content: "Perform a Periapical radiograph (PA)",
          explanation: "Correct!",
          question_id: "q344",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Perform a Cone Beam Computed Tomography (CBCT)",
          explanation: "Incorrect.",
          question_id: "q344",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Perform a Panoramic radiograph",
          explanation: "Incorrect.",
          question_id: "q344",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Perform a Bitewing radiograph",
          explanation: "Incorrect.",
          question_id: "q344",
          is_correct: false,
        },
      ],
    },
    {
      id: "q345",
      content:
        "When working with pediatric patients, what is a key consideration to keep in mind when comparing their dentition to that of permanent teeth?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Pediatric teeth, also known as deciduous or primary teeth, have more dominant pulp horns compared to permanent teeth. This is due to the fact that the pulp chamber in primary teeth is larger in relation to the rest of the tooth, which makes the pulp horns more pronounced. This is an important consideration when performing dental procedures on children to avoid pulp exposure. The other options are incorrect as pediatric teeth do not have thicker enamel, more pronounced root canals, or denser cementum compared to permanent teeth.",
      choices: [
        {
          id: "c1",
          content: "Pediatric teeth have more dominant pulp horns",
          explanation: "Correct!",
          question_id: "q345",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Pediatric teeth have thicker enamel",
          explanation: "Incorrect.",
          question_id: "q345",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Pediatric teeth have more pronounced root canals",
          explanation: "Incorrect.",
          question_id: "q345",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Pediatric teeth have denser cementum",
          explanation: "Incorrect.",
          question_id: "q345",
          is_correct: false,
        },
      ],
    },
    {
      id: "q352",
      content:
        "In a clinical scenario where a patient presents with a pronounced masseter muscle and an enlarged tongue, and has previously experienced difficulties with the administration of anesthesia, what would be the most effective approach to handle this situation?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In a situation where a patient has a pronounced masseter muscle and an enlarged tongue, it can be challenging to administer anesthesia effectively. The most suitable approach in this case would be to use the finger and thumb to retract the cheeks for better control. This would provide a clearer view of the injection site and allow for more precise placement of the needle, thereby reducing the likelihood of complications or discomfort for the patient.",
      choices: [
        {
          id: "c1",
          content: "Utilize a short needle for improved handling",
          explanation: "Incorrect.",
          question_id: "q352",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Administer the anesthesia slowly",
          explanation: "Incorrect.",
          question_id: "q352",
          is_correct: false,
        },
        {
          id: "c3",
          content:
            "Use finger and thumb to retract the cheeks for better control",
          explanation: "Correct!",
          question_id: "q352",
          is_correct: true,
        },
        {
          id: "c4",
          content:
            "Employ a dental mirror to retract the cheek for enhanced visibility",
          explanation: "Incorrect.",
          question_id: "q352",
          is_correct: false,
        },
      ],
    },
    {
      id: "q353",
      content:
        "A patient reports experiencing pain upon biting down and a radiograph reveals a deep, isolated pocket. What dental condition does this most likely indicate?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "The combination of pain upon biting and the presence of a deep, isolated pocket on a radiograph is indicative of a vertical root fracture. This condition occurs when a tooth crack extends from the root's tip towards the chewing surface. Other options such as periodontal abscess, acute pulpitis, and dental caries may also cause pain but they do not typically present with a deep, isolated pocket on a radiograph.",
      choices: [
        {
          id: "c1",
          content: "Periodontal abscess",
          explanation: "Incorrect.",
          question_id: "q353",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Vertical root fracture",
          explanation: "Correct!",
          question_id: "q353",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Acute pulpitis",
          explanation: "Incorrect.",
          question_id: "q353",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Dental caries",
          explanation: "Incorrect.",
          question_id: "q353",
          is_correct: false,
        },
      ],
    },
    {
      id: "q354",
      content:
        "Which of the following features is commonly observed in patients in the end-stage of renal disease?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Patients in the end-stage of renal disease often exhibit a smell of ammonia or halitosis. This is due to the accumulation of waste products in the body, including urea, which is broken down to ammonia in the saliva. The ammonia then causes the characteristic smell of halitosis. The other options listed are not typically associated with end-stage renal disease.",
      choices: [
        {
          id: "c1",
          content: "Smell of ammonia (halitosis)",
          explanation: "Correct!",
          question_id: "q354",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Excessive salivation",
          explanation: "Incorrect.",
          question_id: "q354",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Loss of taste sensation",
          explanation: "Incorrect.",
          question_id: "q354",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Development of oral ulcers",
          explanation: "Incorrect.",
          question_id: "q354",
          is_correct: false,
        },
      ],
    },
    {
      id: "q355",
      content:
        "A patient who underwent a renal transplantation two months ago has now come seeking dental treatment. What would be the appropriate management approach in this case?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Patients who have undergone renal transplantation are at a higher risk of infection due to immunosuppression. Therefore, elective dental treatment should be deferred until 6 months after the transplantation to allow the patient's immune system to stabilize. Emergency dental treatment can be provided if necessary, but with caution and after consulting with the patient's nephrologist.",
      choices: [
        {
          id: "c1",
          content: "Proceed with the dental treatment as per normal protocol",
          explanation: "Incorrect.",
          question_id: "q355",
          is_correct: false,
        },
        {
          id: "c2",
          content:
            "Defer any elective dental treatment until 6 months after the renal transplantation",
          explanation: "Correct!",
          question_id: "q355",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Provide dental treatment only in case of emergencies",
          explanation: "Incorrect.",
          question_id: "q355",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Refer the patient back to their nephrologist for clearance",
          explanation: "Incorrect.",
          question_id: "q355",
          is_correct: false,
        },
      ],
    },
    {
      id: "q356",
      content:
        "An athlete has experienced a traumatic event resulting in the loss of tooth number 11. What type of dental implant would be most appropriate to place for this patient?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In this case, a bone level implant would be the most appropriate choice. Bone level implants are placed in the jawbone, just like the natural roots of teeth. They are often used in the aesthetic zone, such as tooth number 11, where the appearance is important. Tissue level implants, on the other hand, are placed above the bone level and are more suitable for the posterior region where aesthetics are not a primary concern. Subperiosteal and transosteal implants are less commonly used and are typically reserved for patients with significant bone loss.",
      choices: [
        {
          id: "c1",
          content: "Tissue level implant",
          explanation: "Incorrect.",
          question_id: "q356",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Bone level implant",
          explanation: "Correct!",
          question_id: "q356",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Subperiosteal implant",
          explanation: "Incorrect.",
          question_id: "q356",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Transosteal implant",
          explanation: "Incorrect.",
          question_id: "q356",
          is_correct: false,
        },
      ],
    },
    {
      id: "q357",
      content:
        "An X-ray image displays an orthodontic appliance along with extremely shortened roots. What could be the potential cause for this observation?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "Excessive root resorption is a common complication of orthodontic treatment. It is a process where the body reabsorbs the root of a tooth, leading to a shortened root. This can be seen on an X-ray image as shortened roots. The other options, such as inadequate root canal treatment, periodontal disease, and dental caries, do not typically result in root shortening.",
      choices: [
        {
          id: "c1",
          content: "Excessive root resorption",
          explanation: "Correct!",
          question_id: "q357",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Inadequate root canal treatment",
          explanation: "Incorrect.",
          question_id: "q357",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Periodontal disease",
          explanation: "Incorrect.",
          question_id: "q357",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Dental caries",
          explanation: "Incorrect.",
          question_id: "q357",
          is_correct: false,
        },
      ],
    },
    {
      id: "q358",
      content:
        "In a patient diagnosed with Class III malocclusion, who presents with a normal mandible and a retruded maxilla, which surgical procedure would be most beneficial in treating this condition?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In a patient with Class III malocclusion, a normal mandible and a retruded maxilla, the most beneficial surgical procedure would be a Le Fort I advancement. This procedure is designed to move the upper jaw (maxilla) forward to correct the retrusion and improve the patient's occlusion and facial profile. The other options listed, such as Bilateral sagittal split osteotomy, Mandibular setback surgery, and Genioplasty, are not appropriate for this case as they involve modifications to the mandible or chin, which are not indicated in this scenario.",
      choices: [
        {
          id: "c1",
          content: "Le Fort I advancement",
          explanation: "Correct!",
          question_id: "q358",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Bilateral sagittal split osteotomy",
          explanation: "Incorrect.",
          question_id: "q358",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Mandibular setback surgery",
          explanation: "Incorrect.",
          question_id: "q358",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Genioplasty",
          explanation: "Incorrect.",
          question_id: "q358",
          is_correct: false,
        },
      ],
    },
    {
      id: "q360",
      content:
        "Which of the following analgesics is considered the safest to administer to a patient diagnosed with a peptic ulcer?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Acetaminophen is considered the safest analgesic for patients with peptic ulcers. This is because it does not increase the risk of gastrointestinal bleeding, unlike non-steroidal anti-inflammatory drugs (NSAIDs) such as Ibuprofen, Naproxen, and Aspirin. NSAIDs can exacerbate peptic ulcers and increase the risk of gastrointestinal bleeding, making them less safe for patients with this condition.",
      choices: [
        {
          id: "c1",
          content: "Ibuprofen",
          explanation: "Incorrect.",
          question_id: "q360",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Naproxen",
          explanation: "Incorrect.",
          question_id: "q360",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Aspirin",
          explanation: "Incorrect.",
          question_id: "q360",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Acetaminophen",
          explanation: "Correct!",
          question_id: "q360",
          is_correct: true,
        },
      ],
    },
    {
      id: "q361",
      content:
        "What is the recommended minimum distance from a dental implant to the mental nerve?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In order to avoid nerve damage during dental implant placement, it is recommended to maintain a minimum distance of 2 mm posterior to the mental nerve. This is to ensure the safety and integrity of the nerve during the surgical procedure.",
      choices: [
        {
          id: "c1",
          content: "5 mm anterior to the mental nerve",
          explanation: "Incorrect.",
          question_id: "q361",
          is_correct: false,
        },
        {
          id: "c2",
          content: "2 mm anterior to the mental nerve",
          explanation: "Incorrect.",
          question_id: "q361",
          is_correct: false,
        },
        {
          id: "c3",
          content: "2 mm posterior to the mental nerve",
          explanation: "Correct!",
          question_id: "q361",
          is_correct: true,
        },
        {
          id: "c4",
          content: "5 mm posterior to the mental nerve",
          explanation: "Incorrect.",
          question_id: "q361",
          is_correct: false,
        },
      ],
    },
    {
      id: "q362",
      content:
        "If an orthodontic force of 75 grams is applied, what is the equivalent force in grams that would be required for tooth intrusion?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In orthodontics, the force applied for tooth movement varies depending on the type of movement required. For tooth intrusion, a lighter force is typically used. In this case, a force of 25 grams is appropriate for tooth intrusion when an orthodontic force of 75 grams is applied.",
      choices: [
        {
          id: "c1",
          content: "25 grams",
          explanation: "Correct!",
          question_id: "q362",
          is_correct: true,
        },
        {
          id: "c2",
          content: "50 grams",
          explanation: "Incorrect.",
          question_id: "q362",
          is_correct: false,
        },
        {
          id: "c3",
          content: "75 grams",
          explanation: "Incorrect.",
          question_id: "q362",
          is_correct: false,
        },
        {
          id: "c4",
          content: "100 grams",
          explanation: "Incorrect.",
          question_id: "q362",
          is_correct: false,
        },
      ],
    },
    {
      id: "q363",
      content:
        "A prosthodontist entered a room where a consultant was engaged in a discussion with a general dentist about a particular case, seeking his opinion. The general dentist suggested that multiple teeth required extraction, but the consultant rejected this suggestion, requesting further investigations. Which professional conduct principle is being violated in this scenario?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In this scenario, the prosthodontist is violating the principle of respecting the autonomy of a colleague. This principle implies that each professional should respect the opinions and decisions of their colleagues, provided they are within the bounds of professional standards and ethics. The prosthodontist should not have intervened in the discussion between the consultant and the general dentist without being invited to do so.",
      choices: [
        {
          id: "c1",
          content: "Respecting the autonomy of a colleague",
          explanation: "Correct!",
          question_id: "q363",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Proposing a different treatment plan",
          explanation: "Incorrect.",
          question_id: "q363",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Passive observation without intervention",
          explanation: "Incorrect.",
          question_id: "q363",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Infringing on patient confidentiality",
          explanation: "Incorrect.",
          question_id: "q363",
          is_correct: false,
        },
      ],
    },
    {
      id: "q364",
      content:
        "Which of the following is considered the safest analgesic to administer to patients suffering from asthma?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Acetaminophen is considered the safest analgesic for asthmatic patients. This is because nonsteroidal anti-inflammatory drugs (NSAIDs) such as Ibuprofen, Naproxen, and Aspirin can potentially exacerbate asthma symptoms by causing bronchospasm. Acetaminophen, on the other hand, does not have this side effect and is generally well-tolerated by asthmatic patients.",
      choices: [
        {
          id: "c1",
          content: "Ibuprofen",
          explanation: "Incorrect.",
          question_id: "q364",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Naproxen",
          explanation: "Incorrect.",
          question_id: "q364",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Aspirin",
          explanation: "Incorrect.",
          question_id: "q364",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Acetaminophen",
          explanation: "Correct!",
          question_id: "q364",
          is_correct: true,
        },
      ],
    },
    {
      id: "q365",
      content:
        "How should you manage an anxious asthmatic patient who has a known allergy to diazepam?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Nitrous oxide is a safe and effective sedative agent that is mixed with oxygen and inhaled through a small mask that fits over the patient's nose. It is not a drug, so there are no side effects. It is a good option for patients who are anxious or have a known allergy to other sedatives like diazepam.",
      choices: [
        {
          id: "c1",
          content: "Administer nitrous oxide",
          explanation: "Correct!",
          question_id: "q365",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Administer diazepam regardless of allergy",
          explanation: "Incorrect.",
          question_id: "q365",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Administer a higher dose of diazepam",
          explanation: "Incorrect.",
          question_id: "q365",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Do not administer any sedative",
          explanation: "Incorrect.",
          question_id: "q365",
          is_correct: false,
        },
      ],
    },
    {
      id: "q366",
      content:
        "A patient presents with complaints of difficulty in closing his eyes and mouth. Which cranial nerve is likely to be injured in this case?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The symptoms described by the patient, difficulty in closing his eyes and mouth, are indicative of a possible injury to the Facial Nerve (Cranial Nerve VII). This nerve controls the muscles of facial expression, and damage to it can result in facial paralysis or weakness, affecting the ability to close the eyes and mouth.",
      choices: [
        {
          id: "c1",
          content: "Cranial Nerve V (Trigeminal Nerve)",
          explanation: "Incorrect.",
          question_id: "q366",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Cranial Nerve VI (Abducens Nerve)",
          explanation: "Incorrect.",
          question_id: "q366",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Cranial Nerve VII (Facial Nerve)",
          explanation: "Correct!",
          question_id: "q366",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Cranial Nerve VIII (Vestibulocochlear Nerve)",
          explanation: "Incorrect.",
          question_id: "q366",
          is_correct: false,
        },
      ],
    },
    {
      id: "q367",
      content:
        "Which type of rubber dam clamp is most appropriately used for the upper left first molar, also known as tooth number 14?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The W8 rubber dam clamp is most appropriately used for the upper left first molar, also known as tooth number 14. The other choices, 6A, 12A, and 214, are not typically used for this specific tooth.",
      choices: [
        {
          id: "c1",
          content: "W8 rubber dam clamp",
          explanation: "Correct!",
          question_id: "q367",
          is_correct: true,
        },
        {
          id: "c2",
          content: "6A rubber dam clamp",
          explanation: "Incorrect.",
          question_id: "q367",
          is_correct: false,
        },
        {
          id: "c3",
          content: "12A rubber dam clamp",
          explanation: "Incorrect.",
          question_id: "q367",
          is_correct: false,
        },
        {
          id: "c4",
          content: "214 rubber dam clamp",
          explanation: "Incorrect.",
          question_id: "q367",
          is_correct: false,
        },
      ],
    },
    {
      id: "q368",
      content:
        "What is the D9 value for a file of size 30 with a taper of 0.04?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The D9 value of a file can be calculated by subtracting the taper from the file size. In this case, the file size is 30 and the taper is 0.04. Therefore, the D9 value is 30 - (9 * 0.04) = 0.44.",
      choices: [
        {
          id: "c1",
          content: "0.22",
          explanation: "Incorrect.",
          question_id: "q368",
          is_correct: false,
        },
        {
          id: "c2",
          content: "0.33",
          explanation: "Incorrect.",
          question_id: "q368",
          is_correct: false,
        },
        {
          id: "c3",
          content: "0.44",
          explanation: "Correct!",
          question_id: "q368",
          is_correct: true,
        },
        {
          id: "c4",
          content: "0.66",
          explanation: "Incorrect.",
          question_id: "q368",
          is_correct: false,
        },
      ],
    },
    {
      id: "q369",
      content:
        "A patient has experienced a facial accident, which has affected both his eyes and maxilla bilaterally. Without any involvement of the zygoma, what type of fracture is this likely to be?",
      category_id: "geography",
      image_url: "",
      explanation:
        "A Le Fort III fracture, also known as craniofacial disjunction, involves the separation of all facial bones from the cranial base. It is characterized by fractures through the zygomatic arches, orbits (including the inner and outer walls), and the base of the nose. The involvement of the eyes and maxilla bilaterally in the patient's case, without any mention of zygoma, suggests a Le Fort III fracture.",
      choices: [
        {
          id: "c1",
          content: "Le Fort I fracture",
          explanation: "Incorrect.",
          question_id: "q369",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Le Fort II fracture",
          explanation: "Incorrect.",
          question_id: "q369",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Le Fort III fracture",
          explanation: "Correct!",
          question_id: "q369",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Zygomatic complex fracture",
          explanation: "Incorrect.",
          question_id: "q369",
          is_correct: false,
        },
      ],
    },
    {
      id: "q370",
      content:
        "In a clinical scenario where an impression is taken but one side appears larger than the other, what could be the most likely cause of this discrepancy?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In dental practice, if one side of an impression appears larger than the other, it is most likely due to the improper placement of the impression tray. This could be because the tray was not centered properly or was tilted during the impression taking process. The other options are less likely as patient movement would typically cause a blurred or distorted impression rather than a size discrepancy, expired impression material would affect the entire impression, not just one side, and a faulty impression tray would likely be noticed before the impression process.",
      choices: [
        {
          id: "c1",
          content: "Improper placement of the impression tray",
          explanation: "Correct!",
          question_id: "q370",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Patient moved during the impression process",
          explanation: "Incorrect.",
          question_id: "q370",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Use of expired impression material",
          explanation: "Incorrect.",
          question_id: "q370",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Faulty impression tray",
          explanation: "Incorrect.",
          question_id: "q370",
          is_correct: false,
        },
      ],
    },
    {
      id: "q371",
      content:
        "A female patient requires a specific dental treatment plan, however, her husband insists on extraction due to financial constraints. What is the most appropriate course of action in this situation?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In this situation, the most appropriate course of action is to obtain the patient's informed consent for the preferred treatment plan. The patient's autonomy and right to make decisions about her own healthcare should be respected, regardless of the financial concerns of her husband. It is important to explain the benefits and risks of the preferred treatment plan, as well as the consequences of not proceeding with it, to the patient. If the patient understands and agrees to the preferred treatment plan, then her informed consent should be obtained.",
      choices: [
        {
          id: "c1",
          content: "Proceed with the extraction as the husband demanded",
          explanation: "Incorrect.",
          question_id: "q371",
          is_correct: false,
        },
        {
          id: "c2",
          content:
            "Obtain the patient's informed consent for the preferred treatment plan",
          explanation: "Correct!",
          question_id: "q371",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Refer the case for a second opinion",
          explanation: "Incorrect.",
          question_id: "q371",
          is_correct: false,
        },
        {
          id: "c4",
          content:
            "Ignore the husband's financial concerns and proceed with the treatment plan",
          explanation: "Incorrect.",
          question_id: "q371",
          is_correct: false,
        },
      ],
    },
    {
      id: "q372",
      content:
        "What is the recommended maximum bacterial count in dental unit waterlines, as per the Centers for Disease Control and Prevention (CDC) guidelines?",
      category_id: "geography",
      image_url: "",
      explanation:
        "According to the Centers for Disease Control and Prevention (CDC) guidelines, the maximum bacterial count in dental unit waterlines should not exceed 500 colony-forming units (CFU) per milliliter (mL). This is to ensure the safety of both the dental healthcare personnel and the patients.",
      choices: [
        {
          id: "c1",
          content: "500 CFU/mL",
          explanation: "Correct!",
          question_id: "q372",
          is_correct: true,
        },
        {
          id: "c2",
          content: "1000 CFU/mL",
          explanation: "Incorrect.",
          question_id: "q372",
          is_correct: false,
        },
        {
          id: "c3",
          content: "1500 CFU/mL",
          explanation: "Incorrect.",
          question_id: "q372",
          is_correct: false,
        },
        {
          id: "c4",
          content: "2000 CFU/mL",
          explanation: "Incorrect.",
          question_id: "q372",
          is_correct: false,
        },
      ],
    },
    {
      id: "q391",
      content:
        "A patient undergoing radiotherapy inquires about the potential risk this treatment may have on dental implant placement. What is the level of risk associated?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Patients who have undergone radiotherapy, particularly in the head and neck region, are at a high risk of complications when it comes to dental implant placement. This is due to the fact that radiotherapy can cause damage to the blood vessels in the irradiated area, leading to a decrease in blood supply and, consequently, a decrease in the body's ability to heal. This can result in implant failure and other complications such as osteoradionecrosis.",
      choices: [
        {
          id: "c1",
          content: "Low risk",
          explanation: "Incorrect.",
          question_id: "q391",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Moderate risk",
          explanation: "Incorrect.",
          question_id: "q391",
          is_correct: false,
        },
        {
          id: "c3",
          content: "High risk",
          explanation: "Correct!",
          question_id: "q391",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Radiotherapy has no effect on dental implant placement",
          explanation: "Incorrect.",
          question_id: "q391",
          is_correct: false,
        },
      ],
    },
    {
      id: "q392",
      content:
        "A patient diagnosed with Tuberculosis (TB) presents to the emergency clinic complaining of dental pain. What is the most appropriate method to manage this patient?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In a dental setting, patients with active TB should ideally be treated in a separate room with negative pressure ventilation. This is to prevent the spread of the disease to other patients and healthcare workers. While wearing a high-efficiency particulate air (HEPA) filtration mask can provide some protection, it is not the most appropriate method of managing a TB patient in a dental setting.",
      choices: [
        {
          id: "c1",
          content:
            "Wear a high-efficiency particulate air (HEPA) filtration mask during treatment",
          explanation: "Incorrect.",
          question_id: "q392",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Treat the patient in an isolated room",
          explanation: "Correct!",
          question_id: "q392",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Prescribe antibiotics without any physical examination",
          explanation: "Incorrect.",
          question_id: "q392",
          is_correct: false,
        },
        {
          id: "c4",
          content:
            "Refer the patient to a specialist without any immediate treatment",
          explanation: "Incorrect.",
          question_id: "q392",
          is_correct: false,
        },
      ],
    },
    {
      id: "q393",
      content:
        "A pediatric patient presents with numerous carious lesions and extremely poor oral hygiene. Additionally, the dentist notices multiple bruises across the patient's body. What type of maltreatment has this child likely experienced?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The presence of numerous carious lesions and extremely poor oral hygiene suggests neglect, as these conditions often result from a lack of proper care and attention to the child's oral health. The multiple bruises across the body, which are unrelated to oral health, suggest physical abuse. Therefore, the child has likely experienced both physical abuse and neglect.",
      choices: [
        {
          id: "c1",
          content: "Physical abuse only",
          explanation: "Incorrect.",
          question_id: "q393",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Neglect only",
          explanation: "Incorrect.",
          question_id: "q393",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Both physical abuse and neglect",
          explanation: "Correct!",
          question_id: "q393",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Neither physical abuse nor neglect",
          explanation: "Incorrect.",
          question_id: "q393",
          is_correct: false,
        },
      ],
    },
    {
      id: "q394",
      content:
        "What is the recommended procedure to perform prior to taking a biopsy in oral medicine?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Before taking a biopsy, it is recommended to perform an aspiration. This procedure is done to remove fluid for diagnostic testing and can help to identify the nature of the lesion. It is not necessary to perform a root canal, apply a local anesthetic, or administer antibiotics prior to a biopsy.",
      choices: [
        {
          id: "c1",
          content: "Performing a root canal",
          explanation: "Incorrect.",
          question_id: "q394",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Applying a local anesthetic",
          explanation: "Incorrect.",
          question_id: "q394",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Administering antibiotics",
          explanation: "Incorrect.",
          question_id: "q394",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Performing an aspiration",
          explanation: "Correct!",
          question_id: "q394",
          is_correct: true,
        },
      ],
    },
    {
      id: "q395",
      content:
        "Which of the following substances significantly increases the risk of an adrenal crisis in patients diagnosed with adrenal disease?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Epinephrine, also known as adrenaline, can significantly increase the risk of an adrenal crisis in patients with adrenal disease. This is because epinephrine stimulates the adrenal glands to release more cortisol, a hormone that helps the body respond to stress. In patients with adrenal disease, the adrenal glands may not be able to produce enough cortisol to meet the increased demand, leading to an adrenal crisis. Lidocaine, procaine, and prilocaine are local anesthetics and do not have the same effect on the adrenal glands.",
      choices: [
        {
          id: "c1",
          content: "Lidocaine",
          explanation: "Incorrect.",
          question_id: "q395",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Procaine",
          explanation: "Incorrect.",
          question_id: "q395",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Epinephrine",
          explanation: "Correct!",
          question_id: "q395",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Prilocaine",
          explanation: "Incorrect.",
          question_id: "q395",
          is_correct: false,
        },
      ],
    },
    {
      id: "q396",
      content:
        "How might the behavior of overprotective parents influence their child's behavior in a dental setting?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Overprotective parents can inadvertently worsen a child's behavior in a dental setting. This is because their anxiety and overprotectiveness can be transferred to the child, making the child more anxious and less cooperative during dental procedures. It's important for parents to maintain a calm and positive demeanor to help their child feel more comfortable and cooperative.",
      choices: [
        {
          id: "c1",
          content:
            "Overprotective parents have no influence on the child's behavior",
          explanation: "Incorrect.",
          question_id: "q396",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Overprotective parents can worsen the child's behavior",
          explanation: "Correct!",
          question_id: "q396",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Overprotective parents can improve the child's behavior",
          explanation: "Incorrect.",
          question_id: "q396",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Overprotective parents can make the child more cooperative",
          explanation: "Incorrect.",
          question_id: "q396",
          is_correct: false,
        },
      ],
    },
    {
      id: "q397",
      content:
        "In a scenario where a patient has lost the upper canines, specifically tooth numbers 13 and 23, and a three-unit fixed partial denture (FPD) is being planned, what important factor should be taken into consideration?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In this scenario, the maxillary occlusion and potential violation of Ante's law should be considered. Ante's law states that the combined periodontal membrane area of the abutment teeth must equal or surpass that of the teeth being replaced with the pontic. This is crucial to ensure the longevity and success of the fixed partial denture. The mandibular occlusion is not directly relevant in this case as the patient has lost upper canines.",
      choices: [
        {
          id: "c1",
          content:
            "The maxillary occlusion and potential violation of Ante's law",
          explanation: "Correct!",
          question_id: "q397",
          is_correct: true,
        },
        {
          id: "c2",
          content:
            "The mandibular occlusion and potential violation of Ante's law",
          explanation: "Incorrect.",
          question_id: "q397",
          is_correct: false,
        },
        {
          id: "c3",
          content: "The patient's age and overall oral health",
          explanation: "Incorrect.",
          question_id: "q397",
          is_correct: false,
        },
        {
          id: "c4",
          content: "The patient's preference for the type of prosthetic device",
          explanation: "Incorrect.",
          question_id: "q397",
          is_correct: false,
        },
      ],
    },
    {
      id: "q398",
      content:
        "A patient presents with a missing tooth and a significant amount of bone loss in the surrounding area. The patient is not interested in undergoing any bone grafting procedures. Which treatment option would be most suitable for this patient?",
      category_id: "geography",
      image_url: "",
      explanation:
        "A Maryland bridge is a type of dental bridge that does not require bone grafting. It is a conservative option that requires minimal preparation of the adjacent teeth. The bridge is held in place by a metal or porcelain framework. This framework is bonded onto the backs of the two teeth adjacent to the missing tooth. Therefore, it is a suitable option for a patient who has a missing tooth, significant bone loss, and does not want to undergo bone grafting.",
      choices: [
        {
          id: "c1",
          content: "Maryland bridge",
          explanation: "Incorrect.",
          question_id: "q398",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Conventional bridge",
          explanation: "Correct!",
          question_id: "q398",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Sectional bridge",
          explanation: "Incorrect.",
          question_id: "q398",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Implant supported denture",
          explanation: "Incorrect.",
          question_id: "q398",
          is_correct: false,
        },
      ],
    },
    {
      id: "q399",
      content:
        "What is the most suitable treatment option for a patient who is missing tooth number 12 and does not wish to undergo any extensive treatment procedures?",
      category_id: "geography",
      image_url: "",
      explanation:
        "A Maryland bridge is a conservative alternative to traditional bridges, which requires minimal preparation of adjacent teeth. It is a type of bridge that is commonly used to replace a single missing tooth and is less invasive than other options. Therefore, it is the most suitable option for a patient who does not wish to undergo any extensive treatment procedures.",
      choices: [
        {
          id: "c1",
          content: "Maryland bridge",
          explanation: "Correct!",
          question_id: "q399",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Conventional bridge",
          explanation: "Incorrect.",
          question_id: "q399",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Sectional bridge",
          explanation: "Incorrect.",
          question_id: "q399",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Implant supported denture",
          explanation: "Incorrect.",
          question_id: "q399",
          is_correct: false,
        },
      ],
    },
    {
      id: "q400",
      content:
        "In a case where a single tooth is missing, but the bone is intact and there is ample space available, which dental restoration method would be most suitable?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In a situation where a single tooth is missing, but the bone is intact and there is ample space available, a dental implant would be the most suitable restoration method. Dental implants are designed to replace the root of a missing tooth and can be used to support a crown, bridge, or denture. They are a popular choice for single tooth replacement because they do not require the adjacent teeth to be prepared or ground down, as is the case with fixed partial dentures (FPDs).",
      choices: [
        {
          id: "c1",
          content: "Fixed Partial Denture (FPD)",
          explanation: "Incorrect.",
          question_id: "q400",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Conventional Fixed Partial Denture",
          explanation: "Incorrect.",
          question_id: "q400",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Dental Implant",
          explanation: "Correct!",
          question_id: "q400",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Sectional Fixed Partial Denture",
          explanation: "Incorrect.",
          question_id: "q400",
          is_correct: false,
        },
      ],
    },
    {
      id: "q401",
      content:
        "A dentist performed an extraction procedure where only the coronal part of the third molar was extracted (coronectomy), but some bone was destroyed during the procedure. Why did the dentist choose to leave the roots intact?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "In some cases, a dentist may choose to perform a coronectomy, which involves removing only the crown of a tooth and leaving the roots intact. This is often done when there is a high risk of damage to the inferior alveolar nerve, which runs close to the roots of the lower third molars. Damage to this nerve can cause permanent numbness or tingling in the lower lip, tongue, and chin. By leaving the roots in place, the dentist can reduce the risk of nerve damage.",
      choices: [
        {
          id: "c1",
          content: "To allow for recovery and bone formation around the roots",
          explanation: "Incorrect.",
          question_id: "q401",
          is_correct: false,
        },
        {
          id: "c2",
          content: "To prevent damage to the inferior alveolar nerve",
          explanation: "Correct!",
          question_id: "q401",
          is_correct: true,
        },
        {
          id: "c3",
          content: "To facilitate future dental implant placement",
          explanation: "Incorrect.",
          question_id: "q401",
          is_correct: false,
        },
        {
          id: "c4",
          content: "To reduce the risk of dry socket",
          explanation: "Incorrect.",
          question_id: "q401",
          is_correct: false,
        },
      ],
    },
    {
      id: "q402",
      content:
        "A patient presented to the clinic complaining of pain. The patient had visited the clinic three days prior and underwent a surgical procedure, as evidenced by a provided image showing a graft in the palatal area. What is the formal name of this surgical procedure?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "The image provided shows a graft in the palatal area, which is indicative of a Connective Tissue Graft (CT graft). This procedure involves the removal of a piece of tissue from the palate of the mouth, which is then attached to another area of the mouth. It is often used to treat gum recession or to improve the appearance of the gum line. The other options listed are different types of grafts or surgical procedures that do not match the description provided.",
      choices: [
        {
          id: "c1",
          content: "Connective Tissue Graft",
          explanation: "Correct!",
          question_id: "q402",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Free Gingival Graft",
          explanation: "Incorrect.",
          question_id: "q402",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Subepithelial Connective Tissue Graft",
          explanation: "Incorrect.",
          question_id: "q402",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Coronally Advanced Flap",
          explanation: "Incorrect.",
          question_id: "q402",
          is_correct: false,
        },
      ],
    },
    {
      id: "q403",
      content:
        "A dentist is explaining to a patient the surgical procedure that will be performed, including the potential risks and effects. Which ethical principle best describes the dentist's actions?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The ethical principle of veracity refers to the obligation to tell the truth and not lie or deceive patients. In this scenario, the dentist is being truthful and transparent about the surgical procedure, its potential risks, and effects, which is an example of veracity. Autonomy refers to the patient's right to make decisions about their healthcare, non-maleficence refers to the obligation to do no harm, and justice refers to treating patients fairly and equitably.",
      choices: [
        {
          id: "c1",
          content: "Autonomy",
          explanation: "Incorrect.",
          question_id: "q403",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Veracity",
          explanation: "Correct!",
          question_id: "q403",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Non-maleficence",
          explanation: "Incorrect.",
          question_id: "q403",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Justice",
          explanation: "Incorrect.",
          question_id: "q403",
          is_correct: false,
        },
      ],
    },
    {
      id: "q404",
      content:
        "How should a patient who is currently taking prednisone be managed if they are scheduled for a minor surgical procedure?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Patients who are on long-term corticosteroid therapy, like prednisone, may have suppressed adrenal function. However, for minor surgical procedures, it is generally safe to maintain the current dose of prednisone. Doubling the dose or significantly increasing it could lead to unnecessary risks of side effects. It's always important to consult with the patient's primary care physician or endocrinologist to ensure safe management.",
      choices: [
        {
          id: "c1",
          content: "Administer 100 mg of prednisone 1 hour before the surgery",
          explanation: "Incorrect.",
          question_id: "q404",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Maintain the current dose of prednisone",
          explanation: "Correct!",
          question_id: "q404",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Double the dose of prednisone on the day of the surgery",
          explanation: "Incorrect.",
          question_id: "q404",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Administer 200 mg of prednisone",
          explanation: "Incorrect.",
          question_id: "q404",
          is_correct: false,
        },
      ],
    },
    {
      id: "q405",
      content:
        "In a Prosthodontics case, if a patient experiences pain on occlusion, a clicking sound, and discomfort, what could be the potential cause of these symptoms?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In Prosthodontics, if a patient experiences pain on occlusion, a clicking sound, and discomfort, these symptoms could be due to the excessive vertical dimensions of the prosthesis. This means that the prosthesis is too high, causing an unnatural bite and leading to discomfort and pain. The clicking sound could be due to the unnatural movement of the jaw caused by the excessive height of the prosthesis. Decreased vertical dimensions, improper alignment, and inadequate occlusal adjustment could also cause discomfort, but they would not typically cause a clicking sound.",
      choices: [
        {
          id: "c1",
          content: "Excessive vertical dimensions of the prosthesis",
          explanation: "Correct!",
          question_id: "q405",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Decreased vertical dimensions of the prosthesis",
          explanation: "Incorrect.",
          question_id: "q405",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Improper alignment of the prosthesis",
          explanation: "Incorrect.",
          question_id: "q405",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Inadequate occlusal adjustment",
          explanation: "Incorrect.",
          question_id: "q405",
          is_correct: false,
        },
      ],
    },
    {
      id: "q406",
      content:
        "A patient has been fitted with a complete denture, however, the dentist observes wrinkles and a reduction in facial height. What could be the potential cause of this observation?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The vertical dimension of occlusion (VDO) is the distance between two points when the occluding surfaces are in contact. If the vertical dimension is reduced, it can lead to a reduction in facial height and the appearance of wrinkles. This is because the muscles and soft tissues of the face adapt to the reduced space, leading to a 'collapsed' appearance. Therefore, in this case, the reduced vertical dimensions of the denture are causing the observed symptoms.",
      choices: [
        {
          id: "c1",
          content: "Excessive vertical dimensions of the denture",
          explanation: "Incorrect.",
          question_id: "q406",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Reduced vertical dimensions of the denture",
          explanation: "Correct!",
          question_id: "q406",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Incorrect positioning of the denture",
          explanation: "Incorrect.",
          question_id: "q406",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Poor quality of denture material",
          explanation: "Incorrect.",
          question_id: "q406",
          is_correct: false,
        },
      ],
    },
    {
      id: "q407",
      content:
        "If a patient with Hemophilia A requires dental treatment, which specific blood test should be conducted prior to initiating the dental procedure?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Hemophilia A is a bleeding disorder caused by a deficiency of Factor VIII, which is involved in the intrinsic pathway of blood coagulation. The Partial Thromboplastin Time (PTT) test is used to assess the intrinsic and common pathways of coagulation, including the activity of Factor VIII. Therefore, in patients with Hemophilia A, the PTT test is necessary before starting any dental treatment to evaluate the patient's coagulation status and avoid excessive bleeding.",
      choices: [
        {
          id: "c1",
          content: "Prothrombin Time (PT)",
          explanation: "Incorrect.",
          question_id: "q407",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Partial Thromboplastin Time (PTT)",
          explanation: "Correct!",
          question_id: "q407",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Bleeding Time (BT)",
          explanation: "Incorrect.",
          question_id: "q407",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Complete Blood Count (CBC)",
          explanation: "Incorrect.",
          question_id: "q407",
          is_correct: false,
        },
      ],
    },
    {
      id: "q408",
      content:
        "Which of the following factors primarily determines the path of insertion of a removable denture?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The path of insertion of a removable denture is primarily determined by the guiding planes of the denture. Guiding planes are the vertical or near-vertical surfaces of teeth or implants that guide the direction of placement and removal of a removable prosthesis. Rests and the denture base also play a role in the stability and retention of the denture, but they do not primarily determine the path of insertion.",
      choices: [
        {
          id: "c1",
          content: "Rests of the denture",
          explanation: "Incorrect.",
          question_id: "q408",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Guiding planes of the denture",
          explanation: "Correct!",
          question_id: "q408",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Denture base",
          explanation: "Incorrect.",
          question_id: "q408",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Position of the remaining teeth",
          explanation: "Incorrect.",
          question_id: "q408",
          is_correct: false,
        },
      ],
    },
    {
      id: "q409",
      content:
        "Which of the following orthodontic appliances is most suitable for a pediatric patient who has a persistent thumb sucking habit?",
      category_id: "geography",
      image_url: "",
      explanation:
        "A palatal crib is an orthodontic appliance that is often used to stop thumb sucking in pediatric patients. It is a semi-circular device that is attached to the molars and extends to the roof of the mouth, preventing the thumb from reaching the palate and disrupting the habit. The other options listed are not typically used for this purpose. A fixed retainer is used to maintain the position of teeth after orthodontic treatment. Headgear is used to correct bite and jaw alignment issues. A space maintainer is used to keep a space open for a permanent tooth when a baby tooth has been lost prematurely.",
      choices: [
        {
          id: "c1",
          content: "Palatal crib",
          explanation: "Correct!",
          question_id: "q409",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Fixed retainer",
          explanation: "Incorrect.",
          question_id: "q409",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Headgear",
          explanation: "Incorrect.",
          question_id: "q409",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Space maintainer",
          explanation: "Incorrect.",
          question_id: "q409",
          is_correct: false,
        },
      ],
    },
    {
      id: "q410",
      content:
        "Which term is used to describe a horizontal line that appears on the buccal mucosa at the level of the occlusal plane in a healthy and fit patient?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Linea alba, also known as white line, is a horizontal line that appears on the buccal mucosa at the level of the occlusal plane. It is a normal variant and is usually seen in healthy and fit individuals. It is caused by the frictional irritation of the buccal mucosa against the occlusal plane of the teeth. Fordyce spots are ectopic sebaceous glands, Leukoedema is a whitish appearance of the buccal mucosa, and Stenson's duct is the major duct of the parotid gland.",
      choices: [
        {
          id: "c1",
          content: "Linea alba",
          explanation: "Correct!",
          question_id: "q410",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Fordyce spots",
          explanation: "Incorrect.",
          question_id: "q410",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Leukoedema",
          explanation: "Incorrect.",
          question_id: "q410",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Stenson's duct",
          explanation: "Incorrect.",
          question_id: "q410",
          is_correct: false,
        },
      ],
    },
    {
      id: "q411",
      content:
        "A patient experienced a traumatic incident resulting in a pinpoint pulp exposure approximately 30 minutes ago. What would be the most appropriate treatment in this scenario?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In the case of a recent (acute) pinpoint pulp exposure due to trauma, the most appropriate treatment is direct pulp capping. This procedure involves placing a small amount of dental material directly over the exposed pulp to preserve pulp vitality and promote healing. Pulpotomy, root canal treatment, and extraction are more aggressive treatments that may not be necessary in the case of a small, acute pulp exposure.",
      choices: [
        {
          id: "c1",
          content: "Direct pulp capping",
          explanation: "Correct!",
          question_id: "q411",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Pulpotomy",
          explanation: "Incorrect.",
          question_id: "q411",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Root canal treatment",
          explanation: "Incorrect.",
          question_id: "q411",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Extraction of the tooth",
          explanation: "Incorrect.",
          question_id: "q411",
          is_correct: false,
        },
      ],
    },
    {
      id: "q412",
      content:
        "If a patient experienced a traumatic event that resulted in pinpoint pulp exposure approximately three hours ago, what would be the most appropriate treatment in this case?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In the case of a recent trauma resulting in pinpoint pulp exposure, the most appropriate treatment is direct pulp capping. This procedure involves placing a protective dressing over the exposed pulp to promote healing and maintain pulp vitality. Pulpotomy and pulpectomy are more invasive procedures typically reserved for cases of irreversible pulpitis or necrotic pulp. Root canal treatment is also a more invasive option and is not the first line of treatment for a recent, small pulp exposure.",
      choices: [
        {
          id: "c1",
          content: "Direct pulp capping",
          explanation: "Correct!",
          question_id: "q412",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Pulpotomy",
          explanation: "Incorrect.",
          question_id: "q412",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Pulpectomy",
          explanation: "Incorrect.",
          question_id: "q412",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Root canal treatment",
          explanation: "Incorrect.",
          question_id: "q412",
          is_correct: false,
        },
      ],
    },
    {
      id: "q413",
      content:
        "An orthodontic patient presents to the clinic complaining of irritation from the wires and some ulcers, but his next appointment is scheduled for two weeks later. What is the most appropriate course of action?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In a situation where an orthodontic patient is experiencing discomfort or irritation from the wires, the most appropriate course of action is to apply orthodontic wax to the irritating wire. This will provide a smooth surface and alleviate the discomfort. Trimming the wire should only be done by a professional to avoid further complications. Advising the patient to wait for his next appointment is not appropriate as it leaves the patient in discomfort. Prescribing antibiotics for the ulcers is not the first line of action unless there is a clear sign of infection.",
      choices: [
        {
          id: "c1",
          content: "Trim the protruding wire",
          explanation: "Incorrect.",
          question_id: "q413",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Advise the patient to wait for his next appointment",
          explanation: "Incorrect.",
          question_id: "q413",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Apply orthodontic wax to the irritating wire",
          explanation: "Correct!",
          question_id: "q413",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Prescribe antibiotics for the ulcers",
          explanation: "Incorrect.",
          question_id: "q413",
          is_correct: false,
        },
      ],
    },
    {
      id: "q414",
      content:
        "An orthodontic patient presents to the clinic three days after treatment, complaining of pain. What is the appropriate management strategy in this situation?",
      category_id: "geography",
      image_url: "",
      explanation:
        "It is common for orthodontic patients to experience some discomfort or pain a few days after treatment as the teeth begin to move. The appropriate management strategy is to reassure the patient that this is normal and advise on pain management, such as over-the-counter pain relievers. Removing the appliance or prescribing antibiotics is not necessary unless there are signs of infection or severe discomfort. Referral to an oral surgeon is also not necessary unless there are complications that require surgical intervention.",
      choices: [
        {
          id: "c1",
          content: "Reassure the patient and advise on pain management",
          explanation: "Correct!",
          question_id: "q414",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Immediately remove the orthodontic appliance",
          explanation: "Incorrect.",
          question_id: "q414",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Prescribe antibiotics to the patient",
          explanation: "Incorrect.",
          question_id: "q414",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Refer the patient to an oral surgeon",
          explanation: "Incorrect.",
          question_id: "q414",
          is_correct: false,
        },
      ],
    },
    {
      id: "q415",
      content:
        "A patient presents with unilateral swelling under the jaw, as shown in the provided image. What is the most appropriate management for this condition?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "The patient's condition, characterized by unilateral swelling under the jaw, could be due to an abscess or infection. The most appropriate management would be to perform an incision and drainage (I&D) to relieve the swelling and administer antibiotics to treat the infection. Administering antibiotics alone would not address the swelling, and performing I&D alone would not treat the underlying infection. Referring the patient to a specialist without any immediate intervention could lead to worsening of the condition.",
      choices: [
        {
          id: "c1",
          content:
            "Perform incision and drainage (I&D) and administer antibiotics",
          explanation: "Correct!",
          question_id: "q415",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Administer antibiotics only",
          explanation: "Incorrect.",
          question_id: "q415",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Perform incision and drainage (I&D) only",
          explanation: "Incorrect.",
          question_id: "q415",
          is_correct: false,
        },
        {
          id: "c4",
          content:
            "Refer the patient to a specialist without any immediate intervention",
          explanation: "Incorrect.",
          question_id: "q415",
          is_correct: false,
        },
      ],
    },
    {
      id: "q416",
      content:
        "What is the appropriate dosage of fluoride for a 14-year-old patient?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The appropriate dosage of fluoride for a 14-year-old patient is 1450 ppm. This is the standard concentration of fluoride in toothpaste for individuals above the age of 6. Lower concentrations are recommended for younger children due to the risk of dental fluorosis.",
      choices: [
        {
          id: "c1",
          content: "500 ppm",
          explanation: "Incorrect.",
          question_id: "q416",
          is_correct: false,
        },
        {
          id: "c2",
          content: "1450 ppm",
          explanation: "Correct!",
          question_id: "q416",
          is_correct: true,
        },
        {
          id: "c3",
          content: "2000 ppm",
          explanation: "Incorrect.",
          question_id: "q416",
          is_correct: false,
        },
        {
          id: "c4",
          content: "2500 ppm",
          explanation: "Incorrect.",
          question_id: "q416",
          is_correct: false,
        },
      ],
    },
    {
      id: "q417",
      content:
        "What is the anatomical definition of the Frankfort plane in dentistry?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The Frankfort plane is an anatomical landmark in dentistry and cranial studies. It is defined as the imaginary line passing from the point on the human skull where the lower margin of the eye socket (the infraorbital rim) meets the upper margin of the external ear canal (the external auditory meatus), also known as the porion, to the point where the lower margin of the eye socket meets the upper margin of the external opening of the nose (the orbitale).",
      choices: [
        {
          id: "c1",
          content: "From the porion to the orbitale",
          explanation: "Correct!",
          question_id: "q417",
          is_correct: true,
        },
        {
          id: "c2",
          content: "From the infraorbital rim to the external auditory meatus",
          explanation: "Incorrect.",
          question_id: "q417",
          is_correct: false,
        },
        {
          id: "c3",
          content: "From the nasion to the inion",
          explanation: "Incorrect.",
          question_id: "q417",
          is_correct: false,
        },
        {
          id: "c4",
          content: "From the glabella to the opisthion",
          explanation: "Incorrect.",
          question_id: "q417",
          is_correct: false,
        },
      ],
    },
    {
      id: "q418",
      content:
        "What does the sudden disappearance of the canal during endodontic treatment typically indicate?",
      category_id: "geography",
      image_url: "",
      explanation:
        "During endodontic treatment, the sudden disappearance of the canal is typically indicative of the formation of a ledge. A ledge is a false pathway created by the endodontic file, which deviates from the original canal path. This usually happens when the file is forced or pushed in a curved canal. It does not necessarily mean a perforation or strip perforation has occurred, although these are other complications that can occur during endodontic treatment.",
      choices: [
        {
          id: "c1",
          content: "Formation of a ledge",
          explanation: "Correct!",
          question_id: "q418",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Occurrence of a perforation",
          explanation: "Incorrect.",
          question_id: "q418",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Development of a strip perforation",
          explanation: "Incorrect.",
          question_id: "q418",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Presence of a blockage",
          explanation: "Incorrect.",
          question_id: "q418",
          is_correct: false,
        },
      ],
    },
    {
      id: "q442",
      content:
        "A dentist is treating a patient diagnosed with influenza. After a few hours, the dentist develops a cough. What measures should the dentist take to prevent further infection?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In a dental setting, personal protective equipment (PPE) is crucial to prevent the spread of infections, especially when dealing with patients diagnosed with contagious diseases like influenza. If the dentist develops symptoms such as coughing, it is even more important to use PPE to prevent further spread of the infection. Antibiotics are not effective against viral infections like influenza, and while rest is important for recovery, it does not prevent the spread of the infection.",
      choices: [
        {
          id: "c1",
          content:
            "The dentist should continue working without any precautions",
          explanation: "Incorrect.",
          question_id: "q442",
          is_correct: false,
        },
        {
          id: "c2",
          content:
            "The dentist should wear personal protective equipment (PPE)",
          explanation: "Correct!",
          question_id: "q442",
          is_correct: true,
        },
        {
          id: "c3",
          content: "The dentist should take antibiotics",
          explanation: "Incorrect.",
          question_id: "q442",
          is_correct: false,
        },
        {
          id: "c4",
          content: "The dentist should take a break and rest",
          explanation: "Incorrect.",
          question_id: "q442",
          is_correct: false,
        },
      ],
    },
    {
      id: "q443",
      content:
        "A patient exhibiting signs of anxiety throughout their first dental procedure, with an elevated blood pressure and a heart rate of 90, can be diagnosed with which condition?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The patient's symptoms of anxiety, elevated blood pressure, and a heart rate of 90 could indicate a more serious underlying condition that needs further evaluation. Therefore, the patient should be referred to a physician for further evaluation. Although stress can cause similar symptoms, the continuous nature of the symptoms throughout the procedure suggests that it might be more than a normal response to stress.",
      choices: [
        {
          id: "c1",
          content: "It is a normal response due to stress",
          explanation: "Incorrect.",
          question_id: "q443",
          is_correct: false,
        },
        {
          id: "c2",
          content:
            "The patient should be referred to a physician for further evaluation",
          explanation: "Correct!",
          question_id: "q443",
          is_correct: true,
        },
        {
          id: "c3",
          content: "The patient is experiencing a panic attack",
          explanation: "Incorrect.",
          question_id: "q443",
          is_correct: false,
        },
        {
          id: "c4",
          content: "The patient is suffering from acute stress disorder",
          explanation: "Incorrect.",
          question_id: "q443",
          is_correct: false,
        },
      ],
    },
    {
      id: "q444",
      content: "What is the effect of steroids on blood glucose levels?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Steroids can increase blood glucose levels. This is because they induce insulin resistance and impair insulin secretion, which can lead to hyperglycemia. Therefore, patients on steroid therapy should be monitored for changes in blood glucose levels.",
      choices: [
        {
          id: "c1",
          content: "Increases blood glucose levels",
          explanation: "Correct!",
          question_id: "q444",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Decreases blood glucose levels",
          explanation: "Incorrect.",
          question_id: "q444",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Stabilizes blood glucose levels",
          explanation: "Incorrect.",
          question_id: "q444",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Steroids have no effect on blood glucose levels",
          explanation: "Incorrect.",
          question_id: "q444",
          is_correct: false,
        },
      ],
    },
    {
      id: "q445",
      content:
        "A 15-year-old patient has lost tooth number 21 due to trauma and wishes to replace it with a removable partial denture. How many rests are required for this procedure?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In the case of a removable partial denture replacing a single tooth, two rests are typically required. One rest would be placed on the tooth immediately anterior to the space, and the other rest would be placed on the tooth immediately posterior to the space. This provides the necessary support and stability for the denture.",
      choices: [
        {
          id: "c1",
          content: "One rest",
          explanation: "Incorrect.",
          question_id: "q445",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Two rests",
          explanation: "Correct!",
          question_id: "q445",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Three rests",
          explanation: "Incorrect.",
          question_id: "q445",
          is_correct: false,
        },
        {
          id: "c4",
          content: "No rest is needed",
          explanation: "Incorrect.",
          question_id: "q445",
          is_correct: false,
        },
      ],
    },
    {
      id: "q446",
      content:
        "Given a radiograph of a dental implant demonstrating bone loss extending to the apical part, with incorrect angulation and proximity to the adjacent tooth, and visible calculus, what is the primary cause of the observed bone loss?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "In the context of dental implants, incorrect angulation can lead to biomechanical problems, including bone loss. While calculus, excessive cement, and inadequate oral hygiene can contribute to peri-implant diseases, the question specifically mentions incorrect angulation, making it the primary cause in this scenario.",
      choices: [
        {
          id: "c1",
          content: "Presence of calculus",
          explanation: "Incorrect.",
          question_id: "q446",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Incorrect angulation of the implant",
          explanation: "Correct!",
          question_id: "q446",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Excessive cement around the implant",
          explanation: "Incorrect.",
          question_id: "q446",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Inadequate oral hygiene",
          explanation: "Incorrect.",
          question_id: "q446",
          is_correct: false,
        },
      ],
    },
    {
      id: "q447",
      content:
        "What is the appropriate method for a dental assistant to hand a blade to the dentist during a procedure?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The safest and most appropriate method for a dental assistant to hand a blade to the dentist is to hand it directly to him with the sharp part facing away. This minimizes the risk of accidental injury. Placing the blade on the dentist's working space or on a clean space could lead to potential contamination or accidental injury. Throwing it to the dentist is not a safe or professional practice.",
      choices: [
        {
          id: "c1",
          content: "Placing it on the dentist's working space",
          explanation: "Incorrect.",
          question_id: "q447",
          is_correct: false,
        },
        {
          id: "c2",
          content:
            "Placing it on a clean space and verbally notifying the dentist",
          explanation: "Incorrect.",
          question_id: "q447",
          is_correct: false,
        },
        {
          id: "c3",
          content:
            "Handing it directly to the dentist with the sharp part facing away from him",
          explanation: "Correct!",
          question_id: "q447",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Throwing it to the dentist",
          explanation: "Incorrect.",
          question_id: "q447",
          is_correct: false,
        },
      ],
    },
    {
      id: "q448",
      content:
        "In adults, which area of the mandible is most commonly fractured?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The condylar process is the most common site of fracture in the mandible in adults. This is due to its anatomical position and the thin neck of the condyle which is susceptible to direct and indirect trauma. The symphysis and body of the mandible are less commonly fractured.",
      choices: [
        {
          id: "c1",
          content: "Condylar process",
          explanation: "Correct!",
          question_id: "q448",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Symphysis",
          explanation: "Incorrect.",
          question_id: "q448",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Body of the mandible",
          explanation: "Incorrect.",
          question_id: "q448",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Coronoid process",
          explanation: "Incorrect.",
          question_id: "q448",
          is_correct: false,
        },
      ],
    },
    {
      id: "q449",
      content:
        "A 4-year-old African boy presents with a complaint of loss of all his deciduous teeth. He is observed to have thin arms and legs, and swelling in the stomach. Following examinations, the patient exhibits redness and itchiness. What type of allergic reaction is the patient likely experiencing?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The patient's symptoms of redness and itchiness following examinations suggest an immediate allergic reaction. This is characteristic of a Type I hypersensitivity reaction, which is an immediate reaction mediated by IgE antibodies. Type IV reactions, on the other hand, are delayed and cell-mediated, and would not result in immediate symptoms.",
      choices: [
        {
          id: "c1",
          content: "A. Type I immediate hypersensitivity reaction",
          explanation: "Correct!",
          question_id: "q449",
          is_correct: true,
        },
        {
          id: "c2",
          content: "B. Type IV immediate hypersensitivity reaction",
          explanation: "Incorrect.",
          question_id: "q449",
          is_correct: false,
        },
        {
          id: "c3",
          content: "C. Type I delayed hypersensitivity reaction",
          explanation: "Incorrect.",
          question_id: "q449",
          is_correct: false,
        },
        {
          id: "c4",
          content: "D. Type IV delayed hypersensitivity reaction",
          explanation: "Incorrect.",
          question_id: "q449",
          is_correct: false,
        },
      ],
    },
    {
      id: "q450",
      content:
        "How should a dental practitioner approach the treatment of a patient diagnosed with chronic bronchitis?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Patients with chronic bronchitis often experience shortness of breath and difficulty breathing, especially when lying down. Therefore, treating the patient in an upright position can help to alleviate these symptoms and make the patient more comfortable during the dental procedure. While pulse oximetry can be used to monitor oxygen saturation, it is not a treatment method in itself. Treating the patient as a normal patient without any special considerations could potentially exacerbate the patient's symptoms, and additional sedation techniques are not typically necessary unless the patient is particularly anxious or the procedure is expected to be lengthy or complex.",
      choices: [
        {
          id: "c1",
          content:
            "Treat the patient as a normal patient without any special considerations",
          explanation: "Incorrect.",
          question_id: "q450",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Treat the patient in an upright position",
          explanation: "Correct!",
          question_id: "q450",
          is_correct: true,
        },
        {
          id: "c3",
          content:
            "Treat the patient while using pulse oximetry for monitoring oxygen saturation",
          explanation: "Incorrect.",
          question_id: "q450",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Treat the patient with additional sedation techniques",
          explanation: "Incorrect.",
          question_id: "q450",
          is_correct: false,
        },
      ],
    },
    {
      id: "q451",
      content:
        "What is the most appropriate treatment for a patient presenting with an anterior open bite, posterior cross bite, and a habit of thumb sucking?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The most appropriate treatment for a patient with an anterior open bite, posterior cross bite, and a thumb-sucking habit is the use of a Palatal crib appliance. This appliance is designed to discourage thumb sucking, which can contribute to the development of an open bite and cross bite. The Quad Helix and Hass appliances are used for other orthodontic issues, while the Headgear appliance is typically used to correct bite and jaw alignment issues.",
      choices: [
        {
          id: "c1",
          content: "Quad Helix appliance",
          explanation: "Incorrect.",
          question_id: "q451",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Hass appliance",
          explanation: "Incorrect.",
          question_id: "q451",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Palatal crib appliance",
          explanation: "Correct!",
          question_id: "q451",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Headgear appliance",
          explanation: "Incorrect.",
          question_id: "q451",
          is_correct: false,
        },
      ],
    },
    {
      id: "q452",
      content:
        "If a dental assistant who has received the Hepatitis B virus (HBV) vaccination experiences a needle stick injury from a patient with HBV, what is the most appropriate course of action?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In the event of a needle stick injury, if the dental assistant has been vaccinated for Hepatitis B virus (HBV), no further action is required. The vaccination provides immunity against the virus, thus protecting the assistant from infection. The other options are not necessary as the assistant is already protected by the vaccination.",
      choices: [
        {
          id: "c1",
          content:
            "Immediately administer Hepatitis B Immune Globulin (HBIG) to the assistant",
          explanation: "Incorrect.",
          question_id: "q452",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Test the assistant's Immunoglobulin (IG) levels",
          explanation: "Incorrect.",
          question_id: "q452",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Test the patient's blood for other diseases",
          explanation: "Incorrect.",
          question_id: "q452",
          is_correct: false,
        },
        {
          id: "c4",
          content:
            "Do nothing since the assistant has already received the vaccination",
          explanation: "Correct!",
          question_id: "q452",
          is_correct: true,
        },
      ],
    },
    {
      id: "q453",
      content:
        "In the case of a radiograph showing a very large dentigerous cyst, what would be the most appropriate treatment?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "A dentigerous cyst is a type of odontogenic cyst associated with the crown of an unerupted or developing tooth. In the case of a large dentigerous cyst, marsupialization is often the preferred treatment. This involves creating a surgical window in the cyst to allow for drainage and a decrease in size. The cyst can then be more easily removed at a later date, or it may resolve on its own. Treatment without marsupialization, enucleation or simple extraction may not be appropriate due to the size of the cyst and potential for damage to surrounding structures.",
      choices: [
        {
          id: "c1",
          content: "Treatment with marsupialization",
          explanation: "Correct!",
          question_id: "q453",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Treatment without marsupialization",
          explanation: "Incorrect.",
          question_id: "q453",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Treatment with enucleation",
          explanation: "Incorrect.",
          question_id: "q453",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Treatment with simple extraction",
          explanation: "Incorrect.",
          question_id: "q453",
          is_correct: false,
        },
      ],
    },
    {
      id: "q454",
      content:
        "In pediatric dentistry, if a patient has lost their mandibular primary teeth but still retains the anterior and first permanent molar, which type of space maintainer would be most appropriate to use?",
      category_id: "geography",
      image_url: "",
      explanation:
        "A lingual arch is the most appropriate space maintainer in this scenario. It is used when a child has lost their mandibular primary teeth but still has the anterior and first permanent molar. The lingual arch helps to maintain the space for the permanent teeth to erupt properly. The other options, such as the distal shoe, band and loop, and bilateral band and loop, are typically used in different scenarios or for different tooth loss patterns.",
      choices: [
        {
          id: "c1",
          content: "Lingual arch",
          explanation: "Correct!",
          question_id: "q454",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Distal shoe",
          explanation: "Incorrect.",
          question_id: "q454",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Band and loop",
          explanation: "Incorrect.",
          question_id: "q454",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Bilateral band and loop",
          explanation: "Incorrect.",
          question_id: "q454",
          is_correct: false,
        },
      ],
    },
    {
      id: "q455",
      content:
        "Which periodontal probe is characterized by having 3 millimeter divisions?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The Williams Periodontal Probe is characterized by having 3 millimeter divisions. This probe is commonly used in periodontal examinations to measure pocket depths around a tooth in order to establish the state of health of the periodontium. The other probes listed, UNC 15, Michigan, and Marquis, have different measurement divisions.",
      choices: [
        {
          id: "c1",
          content: "UNC 15 Periodontal Probe",
          explanation: "Incorrect.",
          question_id: "q455",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Williams Periodontal Probe",
          explanation: "Correct!",
          question_id: "q455",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Michigan Periodontal Probe",
          explanation: "Incorrect.",
          question_id: "q455",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Marquis Periodontal Probe",
          explanation: "Incorrect.",
          question_id: "q455",
          is_correct: false,
        },
      ],
    },
    {
      id: "q456",
      content:
        "Who is the appropriate professional to extract a horizontally impacted third molar?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Horizontally impacted third molars are complex cases that often require surgical intervention. The extraction of such teeth is typically beyond the scope of general dentistry and is best handled by specialists in Oral and Maxillofacial Surgery. These professionals have the necessary training and experience to manage potential complications and ensure the best possible outcome for the patient.",
      choices: [
        {
          id: "c1",
          content: "Refer the patient to Oral and Maxillofacial Surgeons",
          explanation: "Correct!",
          question_id: "q456",
          is_correct: true,
        },
        {
          id: "c2",
          content:
            "Give the patient an option to either be treated by you or be referred",
          explanation: "Incorrect.",
          question_id: "q456",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Extract it yourself",
          explanation: "Incorrect.",
          question_id: "q456",
          is_correct: false,
        },
        {
          id: "c4",
          content:
            "Inform the patient of the risks and then proceed to extract it yourself",
          explanation: "Incorrect.",
          question_id: "q456",
          is_correct: false,
        },
      ],
    },
    {
      id: "q457",
      content:
        "Who is responsible for providing consent for dental treatment for a patient with Down Syndrome?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In most cases, patients with Down Syndrome may not have the capacity to fully understand the implications of dental treatments and thus may not be able to provide informed consent. Therefore, the responsibility typically falls on the patient's caregiver or family member to provide consent for dental treatments. It is important to note that the specific laws and regulations regarding consent may vary depending on the jurisdiction.",
      choices: [
        {
          id: "c1",
          content: "Patient himself/herself",
          explanation: "Incorrect.",
          question_id: "q457",
          is_correct: false,
        },
        {
          id: "c2",
          content: "The treating dentist",
          explanation: "Incorrect.",
          question_id: "q457",
          is_correct: false,
        },
        {
          id: "c3",
          content: "The patient's caregiver or family member",
          explanation: "Correct!",
          question_id: "q457",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Any hospital staff",
          explanation: "Incorrect.",
          question_id: "q457",
          is_correct: false,
        },
      ],
    },
    {
      id: "q458",
      content:
        "A radiograph shows generalized root resorption in a patient. The patient's orthodontist suggests increasing the force applied to the braces to expedite the treatment before her wedding. What could be the possible cause of the observed root resorption?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "Root resorption can occur as a result of excessive orthodontic force. When the force applied to the teeth is too strong, it can cause damage to the periodontal ligament and the cementum, leading to root resorption. The other options listed, such as periodontal disease, pulp necrosis, and dental caries, can also cause root resorption, but in this scenario, the orthodontist's plan to increase the force applied to the braces suggests that the root resorption is likely due to excessive orthodontic force.",
      choices: [
        {
          id: "c1",
          content: "Root resorption due to excessive orthodontic force",
          explanation: "Correct!",
          question_id: "q458",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Root resorption due to periodontal disease",
          explanation: "Incorrect.",
          question_id: "q458",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Root resorption due to pulp necrosis",
          explanation: "Incorrect.",
          question_id: "q458",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Root resorption due to dental caries",
          explanation: "Incorrect.",
          question_id: "q458",
          is_correct: false,
        },
      ],
    },
    {
      id: "q459",
      content:
        "Under what circumstances does the Clinical Attachment Level (CAL) equal the Probing Depth (PD)?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The Clinical Attachment Level (CAL) equals the Probing Depth (PD) when the marginal gingiva is at the cementoenamel junction. This is because the CAL is measured from the cementoenamel junction (CEJ) to the base of the probable pocket. If the marginal gingiva is at the CEJ, then the PD (which is measured from the gingival margin to the base of the probable pocket) will be the same as the CAL.",
      choices: [
        {
          id: "c1",
          content: "When the marginal gingiva is at the cementoenamel junction",
          explanation: "Correct!",
          question_id: "q459",
          is_correct: true,
        },
        {
          id: "c2",
          content:
            "When the marginal gingiva is below the cementoenamel junction",
          explanation: "Incorrect.",
          question_id: "q459",
          is_correct: false,
        },
        {
          id: "c3",
          content:
            "When the marginal gingiva is above the cementoenamel junction",
          explanation: "Incorrect.",
          question_id: "q459",
          is_correct: false,
        },
        {
          id: "c4",
          content: "When the marginal gingiva is at the mucogingival junction",
          explanation: "Incorrect.",
          question_id: "q459",
          is_correct: false,
        },
      ],
    },
    {
      id: "q460",
      content:
        "A patient presents with dental abrasion and complains of tooth sensitivity. The patient also has gum recession. What is the most appropriate treatment?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In a patient with dental abrasion, tooth sensitivity, and gum recession, the most appropriate treatment would be the application of composite resin along with a gum graft. The composite resin would help to cover the exposed dentin, reducing sensitivity, while the gum graft would address the gum recession, protecting the root surface and preventing further sensitivity.",
      choices: [
        {
          id: "c1",
          content: "Application of composite resin only",
          explanation: "Incorrect.",
          question_id: "q460",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Application of composite resin with a gum graft",
          explanation: "Correct!",
          question_id: "q460",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Gum graft only",
          explanation: "Incorrect.",
          question_id: "q460",
          is_correct: false,
        },
        {
          id: "c4",
          content: "No treatment required",
          explanation: "Incorrect.",
          question_id: "q460",
          is_correct: false,
        },
      ],
    },
    {
      id: "q461",
      content:
        "A patient presents with stage 4 breast cancer and a poor prognosis. As a dental professional, you are tasked with deciding the appropriate dental treatment. Given the patient's condition, would you opt for root canal therapy (RCT), extraction, or choose not to treat? (Assume that the patient's pain status and other relevant information are unclear.)",
      category_id: "geography",
      image_url: "",
      explanation:
        "In cases of severe systemic disease such as stage 4 cancer with a poor prognosis, the primary goal is to maintain the patient's comfort and quality of life. Invasive dental procedures like root canal therapy or extraction may not be advisable due to the patient's weakened state and potential complications. Therefore, unless the dental issue is causing significant discomfort or pain, it might be best to opt for no treatment. However, every case is unique and decisions should be made on an individual basis, considering the patient's overall health, prognosis, and personal wishes.",
      choices: [
        {
          id: "c1",
          content: "Perform root canal therapy",
          explanation: "Incorrect.",
          question_id: "q461",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Perform an extraction",
          explanation: "Incorrect.",
          question_id: "q461",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Opt for no treatment",
          explanation: "Correct!",
          question_id: "q461",
          is_correct: true,
        },
        {
          id: "c4",
          content:
            "Refer the patient to an oncologist for further consultation",
          explanation: "Incorrect.",
          question_id: "q461",
          is_correct: false,
        },
      ],
    },
    {
      id: "q495",
      content:
        "A male patient presents with a large lesion that does not exhibit root resorption but has sclerotic margins. Based on the provided radiograph, what would be the most appropriate treatment approach?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "In this scenario, the lesion does not show any signs of root resorption and has sclerotic margins, indicating a slow-growing, benign process. Therefore, immediate intervention such as radiotherapy or excision may not be necessary. The best approach would be regular follow-up and monitoring to track any changes in the lesion's size or characteristics.",
      choices: [
        {
          id: "c1",
          content: "Administering radiotherapy",
          explanation: "Incorrect.",
          question_id: "q495",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Performing an excision",
          explanation: "Incorrect.",
          question_id: "q495",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Regular follow-up and monitoring",
          explanation: "Correct!",
          question_id: "q495",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Immediate surgical intervention",
          explanation: "Incorrect.",
          question_id: "q495",
          is_correct: false,
        },
      ],
    },
    {
      id: "q496",
      content:
        "What is the most common risk of infection associated with fully vaccinated healthcare professionals in the field of dentistry?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Despite being fully vaccinated, healthcare professionals, including dentists, are at risk of contracting certain infections. Among these, the Hepatitis C Virus (HCV) is the most common. This is because the vaccine for HCV is not yet available, and the virus can be transmitted through blood and body fluids, which are commonly encountered in dental procedures.",
      choices: [
        {
          id: "c1",
          content: "Hepatitis C Virus (HCV)",
          explanation: "Correct!",
          question_id: "q496",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Human Immunodeficiency Virus (HIV)",
          explanation: "Incorrect.",
          question_id: "q496",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Hepatitis B Virus (HBV)",
          explanation: "Incorrect.",
          question_id: "q496",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Influenza Virus",
          explanation: "Incorrect.",
          question_id: "q496",
          is_correct: false,
        },
      ],
    },
    {
      id: "q497",
      content:
        "Which form of fluoride application is considered the most cost-effective, excluding water fluoridation?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Fluoride varnish is considered the most cost-effective form of fluoride application. It is easy to apply, requires less material, and has a lower risk of fluoride ingestion compared to other methods such as gels and mouthwashes. Fluoride toothpaste is also cost-effective but requires regular, consistent use to be effective.",
      choices: [
        {
          id: "c1",
          content: "Fluoride varnish",
          explanation: "Correct!",
          question_id: "q497",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Fluoride gel",
          explanation: "Incorrect.",
          question_id: "q497",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Fluoride mouthwash",
          explanation: "Incorrect.",
          question_id: "q497",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Fluoride toothpaste",
          explanation: "Incorrect.",
          question_id: "q497",
          is_correct: false,
        },
      ],
    },
    {
      id: "q498",
      content:
        "A radiograph is presented showing a radiolucency in the furcation area of a tooth. What type of endodontic mishap does this represent?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "A radiolucency in the furcation area of a tooth on a radiograph indicates a perforation. This is an endodontic mishap where the integrity of the tooth structure is compromised by creating an artificial opening either in the crown or the root of the tooth. Access gauging, overfilling, and underfilling are other types of endodontic mishaps but they do not result in a radiolucency in the furcation area.",
      choices: [
        {
          id: "c1",
          content: "Perforation",
          explanation: "Correct!",
          question_id: "q498",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Access gauging",
          explanation: "Incorrect.",
          question_id: "q498",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Overfilling",
          explanation: "Incorrect.",
          question_id: "q498",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Underfilling",
          explanation: "Incorrect.",
          question_id: "q498",
          is_correct: false,
        },
      ],
    },
    {
      id: "q502",
      content:
        "Which type of expansion is typically utilized in the treatment of a posterior crossbite?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In the treatment of a posterior crossbite, dental expansion is typically utilized. This involves the widening of the dental arch to correct the crossbite. Skeletal expansion, on the other hand, is a more invasive procedure that involves the widening of the jawbone and is typically reserved for more severe cases or when dental expansion is not sufficient.",
      choices: [
        {
          id: "c1",
          content: "Dental expansion",
          explanation: "Correct!",
          question_id: "q502",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Skeletal expansion",
          explanation: "Incorrect.",
          question_id: "q502",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Transverse expansion",
          explanation: "Incorrect.",
          question_id: "q502",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Bilateral expansion",
          explanation: "Incorrect.",
          question_id: "q502",
          is_correct: false,
        },
      ],
    },
    {
      id: "q503",
      content:
        "What type of orthodontic appliance would be most suitable for a patient presenting with a posterior crossbite and a thumb sucking habit?",
      category_id: "geography",
      image_url: "",
      explanation:
        "A palate crib is an orthodontic appliance that is often used to treat patients with a thumb sucking habit. It is designed to make the habit uncomfortable and therefore discourage the patient from continuing it. On the other hand, a Quad helix is used for the expansion of the jaw and correction of a posterior crossbite. However, it does not directly address the thumb sucking habit. Therefore, in this case, a palate crib would be the most suitable appliance.",
      choices: [
        {
          id: "c1",
          content: "Quad helix",
          explanation: "Incorrect.",
          question_id: "q503",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Palate crib",
          explanation: "Correct!",
          question_id: "q503",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Hawley retainer",
          explanation: "Incorrect.",
          question_id: "q503",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Headgear",
          explanation: "Incorrect.",
          question_id: "q503",
          is_correct: false,
        },
      ],
    },
    {
      id: "q504",
      content:
        "A patient presents with pain in their tongue following the placement of a palatal crib. What is the most appropriate initial response?",
      category_id: "geography",
      image_url: "",
      explanation:
        "When a patient experiences discomfort or pain following the placement of a palatal crib, the first step is to reassure the patient. This is because some discomfort is normal as the patient adjusts to the new appliance. If the pain persists or worsens, further investigation and action may be required.",
      choices: [
        {
          id: "c1",
          content: "Reassure the patient that the pain will subside",
          explanation: "Correct!",
          question_id: "q504",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Immediately remove the palatal crib",
          explanation: "Incorrect.",
          question_id: "q504",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Prescribe a course of antibiotics",
          explanation: "Incorrect.",
          question_id: "q504",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Refer the patient to an oral surgeon",
          explanation: "Incorrect.",
          question_id: "q504",
          is_correct: false,
        },
      ],
    },
    {
      id: "q505",
      content:
        "What is a potential complication that a patient with hyperthyroidism may experience?",
      category_id: "geography",
      image_url: "",
      explanation:
        "A thyrotoxic crisis, also known as a thyroid storm, is a severe and potentially life-threatening complication of hyperthyroidism. It is characterized by a sudden and extreme increase in thyroid hormone levels, which can cause a rapid heart rate, high fever, and delirium. It is a medical emergency that requires immediate treatment. The other options listed are not typically associated with hyperthyroidism.",
      choices: [
        {
          id: "c1",
          content: "Thyrotoxic crisis",
          explanation: "Correct!",
          question_id: "q505",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Hyperglycemic crisis",
          explanation: "Incorrect.",
          question_id: "q505",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Cardiac arrest",
          explanation: "Incorrect.",
          question_id: "q505",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Renal failure",
          explanation: "Incorrect.",
          question_id: "q505",
          is_correct: false,
        },
      ],
    },
    {
      id: "q507",
      content:
        "A patient administered her insulin at home and subsequently lost consciousness while in the dental clinic. What is the most likely cause of this occurrence?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The patient's loss of consciousness in the dental clinic after taking insulin at home is most likely due to insulin shock, also known as hypoglycemia. Insulin shock occurs when the level of glucose in your blood drops too low. This can happen if a diabetic person takes their insulin but does not eat enough food, causing a severe drop in blood sugar levels. Hyperglycemia, on the other hand, is a high blood sugar level, which would not result from taking insulin. Hyperventilation is a condition in which you start to breathe very fast, and it is not directly related to insulin intake.",
      choices: [
        {
          id: "c1",
          content: "Insulin shock",
          explanation: "Correct!",
          question_id: "q507",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Hyperglycemia",
          explanation: "Incorrect.",
          question_id: "q507",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Hyperventilation",
          explanation: "Incorrect.",
          question_id: "q507",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Hypoglycemia",
          explanation: "Incorrect.",
          question_id: "q507",
          is_correct: false,
        },
      ],
    },
    {
      id: "q508",
      content:
        "What is the impact of a hyper-protective family environment on a child's behavior in a dental clinic setting?",
      category_id: "geography",
      image_url: "",
      explanation:
        "A hyper-protective family environment can often lead to increased anxiety and fear in children, especially in unfamiliar settings such as a dental clinic. This can result in worsened behavior as the child may become more uncooperative and resistant to treatment.",
      choices: [
        {
          id: "c1",
          content: "1. It improves the child's behavior",
          explanation: "Incorrect.",
          question_id: "q508",
          is_correct: false,
        },
        {
          id: "c2",
          content: "2. It has no effect on the child's behavior",
          explanation: "Incorrect.",
          question_id: "q508",
          is_correct: false,
        },
        {
          id: "c3",
          content: "3. It worsens the child's behavior",
          explanation: "Incorrect.",
          question_id: "q508",
          is_correct: false,
        },
        {
          id: "c4",
          content: "4. It makes the child more cooperative",
          explanation: "Correct!",
          question_id: "q508",
          is_correct: true,
        },
      ],
    },
    {
      id: "q510",
      content:
        "What is a potential complication of an infection in the canine space that has been previously mentioned?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Cavernous sinus thrombosis is a serious complication that can occur as a result of an infection in the canine space. The infection can spread to the cavernous sinus, a large vein located at the base of the brain. This can lead to the formation of a blood clot, or thrombosis, which can cause a range of serious symptoms and complications, including vision problems, seizures, and even death. The other options, Maxillary sinusitis, Periapical abscess, and Temporomandibular joint disorder, while they can be associated with dental infections, are not typically complications of a canine space infection.",
      choices: [
        {
          id: "c1",
          content: "Cavernous sinus thrombosis",
          explanation: "Correct!",
          question_id: "q510",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Maxillary sinusitis",
          explanation: "Incorrect.",
          question_id: "q510",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Periapical abscess",
          explanation: "Incorrect.",
          question_id: "q510",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Temporomandibular joint disorder",
          explanation: "Incorrect.",
          question_id: "q510",
          is_correct: false,
        },
      ],
    },
    {
      id: "q511",
      content:
        "In a case scenario where an upper temporary crown has a rough margin and bleeding occurs during the impression, what would be the most appropriate course of action?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In a situation where a temporary crown has a rough margin and bleeding occurs during the impression, it is best to fabricate a new temporary crown and delay the impression. This is because a rough margin can cause tissue irritation leading to bleeding which can compromise the quality of the impression. It is important to ensure that the tissues are healthy and there is no bleeding before taking an impression for a crown. Therefore, the temporary crown should be remade to ensure a smooth margin and the impression should be delayed until the tissues have healed.",
      choices: [
        {
          id: "c1",
          content: "Proceed with taking the impression",
          explanation: "Incorrect.",
          question_id: "q511",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Fabricate a new temporary crown and delay the impression",
          explanation: "Correct!",
          question_id: "q511",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Continue with the procedure ignoring the bleeding",
          explanation: "Incorrect.",
          question_id: "q511",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Apply a hemostatic agent and continue with the impression",
          explanation: "Incorrect.",
          question_id: "q511",
          is_correct: false,
        },
      ],
    },
    {
      id: "q512",
      content:
        "In a case of migraine, is it common for the patient to experience a headache accompanied by vomiting?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Migraines are a type of headache characterized by severe throbbing pain or a pulsing sensation, usually on one side of the head. It's often accompanied by nausea, vomiting, and extreme sensitivity to light and sound. Therefore, it is common for a patient with a migraine to experience a headache accompanied by vomiting.",
      choices: [
        {
          id: "c1",
          content: "A. Yes, it is common",
          explanation: "Correct!",
          question_id: "q512",
          is_correct: true,
        },
        {
          id: "c2",
          content: "B. No, it is not common",
          explanation: "Incorrect.",
          question_id: "q512",
          is_correct: false,
        },
        {
          id: "c3",
          content: "C. Only in severe cases",
          explanation: "Incorrect.",
          question_id: "q512",
          is_correct: false,
        },
        {
          id: "c4",
          content: "D. This symptom is not related to migraines",
          explanation: "Incorrect.",
          question_id: "q512",
          is_correct: false,
        },
      ],
    },
    {
      id: "q518",
      content:
        "What is the recommended minimum distance between the mental foramen and a dental implant placement?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The mental foramen is an important anatomical landmark in implant dentistry. It is recommended to maintain a minimum distance of 5 mm between the mental foramen and a dental implant to prevent nerve damage and ensure proper healing and integration of the implant.",
      choices: [
        {
          id: "c1",
          content: "2 mm",
          explanation: "Incorrect.",
          question_id: "q518",
          is_correct: false,
        },
        {
          id: "c2",
          content: "3 mm",
          explanation: "Incorrect.",
          question_id: "q518",
          is_correct: false,
        },
        {
          id: "c3",
          content: "5 mm",
          explanation: "Correct!",
          question_id: "q518",
          is_correct: true,
        },
        {
          id: "c4",
          content: "7 mm",
          explanation: "Incorrect.",
          question_id: "q518",
          is_correct: false,
        },
      ],
    },
    {
      id: "q522",
      content:
        "If a third molar is impacted in the canal and requires extraction, what would be the most appropriate course of action?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In cases where a third molar is impacted in the canal, it is best to refer the patient to an Oral and Maxillofacial Surgeon (OMFS). This is due to the complexity of the procedure and the potential for complications, such as nerve damage. An OMFS has the specialized training and experience to handle these types of cases.",
      choices: [
        {
          id: "c1",
          content: "Perform the extraction yourself",
          explanation: "Incorrect.",
          question_id: "q522",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Refer to an Oral and Maxillofacial Surgeon",
          explanation: "Correct!",
          question_id: "q522",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Prescribe antibiotics and monitor the situation",
          explanation: "Incorrect.",
          question_id: "q522",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Recommend the patient to use a mouth rinse",
          explanation: "Incorrect.",
          question_id: "q522",
          is_correct: false,
        },
      ],
    },
    {
      id: "q524",
      content: "Which of the following is not a type of orthodontic appliance?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Orthodontic appliances are devices used to correct malocclusion and align the teeth. The Hyrax, Quad helix, and Hawley retainer are all types of orthodontic appliances. However, 'Francle' is not recognized as a type of orthodontic appliance, making it the correct answer.",
      choices: [
        {
          id: "c1",
          content: "Francle",
          explanation: "Correct!",
          question_id: "q524",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Hyrax",
          explanation: "Incorrect.",
          question_id: "q524",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Quad helix",
          explanation: "Incorrect.",
          question_id: "q524",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Hawley retainer",
          explanation: "Incorrect.",
          question_id: "q524",
          is_correct: false,
        },
      ],
    },
    {
      id: "q525",
      content:
        "A patient reports that they are unable to eat and are experiencing pain following an orthodontic procedure performed a week ago. What is the most appropriate course of action?",
      category_id: "geography",
      image_url: "",
      explanation:
        "When a patient reports pain and discomfort following an orthodontic procedure, the most appropriate course of action is to examine the patient to identify the cause of the pain. This allows the dentist to accurately diagnose the issue and provide the most effective treatment. Simply reassuring the patient or prescribing painkillers without further examination may not address the underlying issue, and referring the patient to a specialist without further examination may not be necessary if the issue can be resolved by the original dentist.",
      choices: [
        {
          id: "c1",
          content: "Reassure the patient and do nothing",
          explanation: "Incorrect.",
          question_id: "q525",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Prescribe painkillers without further examination",
          explanation: "Incorrect.",
          question_id: "q525",
          is_correct: false,
        },
        {
          id: "c3",
          content:
            "Refer the patient to a specialist without further examination",
          explanation: "Incorrect.",
          question_id: "q525",
          is_correct: false,
        },
        {
          id: "c4",
          content:
            "Examine the patient to identify the cause of the pain and discomfort",
          explanation: "Correct!",
          question_id: "q525",
          is_correct: true,
        },
      ],
    },
    {
      id: "q528",
      content:
        "What is the most appropriate treatment for a patient with a high incidence of dental caries?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The most appropriate treatment for a patient with a high incidence of dental caries is the application of Silver Diamine Fluoride (SDF). SDF is a liquid medication that is painted on teeth to halt the progression of dental caries. It is a non-invasive, painless, and cost-effective treatment. Squamous Cell Carcinoma treatment, Orthodontic treatment, and Periodontal surgery are not directly related to the treatment of dental caries.",
      choices: [
        {
          id: "c1",
          content: "Application of Silver Diamine Fluoride",
          explanation: "Correct!",
          question_id: "q528",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Squamous Cell Carcinoma treatment",
          explanation: "Incorrect.",
          question_id: "q528",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Orthodontic treatment",
          explanation: "Incorrect.",
          question_id: "q528",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Periodontal surgery",
          explanation: "Incorrect.",
          question_id: "q528",
          is_correct: false,
        },
      ],
    },
    {
      id: "q529",
      content:
        "What is the most appropriate treatment for a supracrestal perforation in dentistry?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Mineral Trioxide Aggregate (MTA) is considered the gold standard for treating supracrestal perforations due to its excellent sealing ability, biocompatibility, and ability to promote regeneration of the periodontal ligament. While Glass Ionomer Cement (GIC) can be used in some cases, it is not the preferred treatment due to its lower sealing ability and biocompatibility compared to MTA.",
      choices: [
        {
          id: "c1",
          content: "Glass Ionomer Cement (GIC)",
          explanation: "Incorrect.",
          question_id: "q529",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Mineral Trioxide Aggregate (MTA)",
          explanation: "Correct!",
          question_id: "q529",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Amalgam",
          explanation: "Incorrect.",
          question_id: "q529",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Composite Resin",
          explanation: "Incorrect.",
          question_id: "q529",
          is_correct: false,
        },
      ],
    },
    {
      id: "q530",
      content: "How is the orifice of a root canal typically determined?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The orifice of a root canal is typically determined using an explorer, specifically the DG 16. This dental instrument is designed to locate the openings of small canals that may be difficult to find. The other options listed, such as a periodontal probe, dental mirror, and dental scaler, are not typically used for this purpose.",
      choices: [
        {
          id: "c1",
          content: "Using an explorer - DG 16",
          explanation: "Correct!",
          question_id: "q530",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Using a periodontal probe",
          explanation: "Incorrect.",
          question_id: "q530",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Using a dental mirror",
          explanation: "Incorrect.",
          question_id: "q530",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Using a dental scaler",
          explanation: "Incorrect.",
          question_id: "q530",
          is_correct: false,
        },
      ],
    },
    {
      id: "q531",
      content:
        "What could be a potential cause for the failure of root canal treatment in the upper first molar (previously mentioned)?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The failure of root canal treatment in the upper first molar can be attributed to a variety of factors. However, in this context, the missing mesiobuccal canal (MB2) is the most likely cause. The MB2 canal is often overlooked during root canal treatment due to its small size and difficult location. If not properly identified and treated, it can harbor bacteria and lead to the failure of the root canal treatment.",
      choices: [
        {
          id: "c1",
          content: "Missing mesiobuccal canal (MB2)",
          explanation: "Correct!",
          question_id: "q531",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Overfilled root canal",
          explanation: "Incorrect.",
          question_id: "q531",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Underprepared root canal",
          explanation: "Incorrect.",
          question_id: "q531",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Presence of a periapical lesion",
          explanation: "Incorrect.",
          question_id: "q531",
          is_correct: false,
        },
      ],
    },
    {
      id: "q532",
      content:
        "In the context of a patient experiencing pain after a root canal treatment, what could be the potential cause if the radiograph shows a long obturation?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "Overfilling of the root canal can cause post-operative pain after a root canal treatment. This is due to the extrusion of filling material beyond the apex of the tooth, which can irritate the periapical tissues and cause inflammation and discomfort. The other options listed are potential causes of post-operative pain but would not be associated with a long obturation on a radiograph.",
      choices: [
        {
          id: "c1",
          content: "Overfilling of the root canal",
          explanation: "Correct!",
          question_id: "q532",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Underfilling of the root canal",
          explanation: "Incorrect.",
          question_id: "q532",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Presence of a periapical abscess",
          explanation: "Incorrect.",
          question_id: "q532",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Presence of a residual cyst",
          explanation: "Incorrect.",
          question_id: "q532",
          is_correct: false,
        },
      ],
    },
    {
      id: "q533",
      content:
        "A patient reports that after using their complete denture in the morning, it becomes hard and they are unable to wear it. What could be the possible reason for this issue, given that the patient has been storing the denture without water overnight?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Complete dentures should be stored in water when not in use to prevent them from drying out. When dentures dry out, they can become hard and may warp, making them uncomfortable or even impossible to wear. Therefore, the patient's issue is likely due to them storing the denture in a dry environment overnight.",
      choices: [
        {
          id: "c1",
          content:
            "The patient has been storing the denture in a dry environment overnight",
          explanation: "Correct!",
          question_id: "q533",
          is_correct: true,
        },
        {
          id: "c2",
          content: "The patient has been brushing the denture too hard",
          explanation: "Incorrect.",
          question_id: "q533",
          is_correct: false,
        },
        {
          id: "c3",
          content: "The patient has been using hot water to clean the denture",
          explanation: "Incorrect.",
          question_id: "q533",
          is_correct: false,
        },
        {
          id: "c4",
          content:
            "The patient has been using an abrasive cleaner on the denture",
          explanation: "Incorrect.",
          question_id: "q533",
          is_correct: false,
        },
      ],
    },
    {
      id: "q534",
      content:
        "In which position should a patient with previously mentioned pulmonary disease be placed in the dental chair to alleviate breathing difficulty?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Patients with pulmonary disease often have difficulty breathing when lying flat (supine) or semi-supine. The upright position allows for better lung expansion and easier breathing. The Trendelenburg position, where the patient's head is lower than the feet, can actually exacerbate breathing difficulties and is not recommended.",
      choices: [
        {
          id: "c1",
          content: "Upright position",
          explanation: "Correct!",
          question_id: "q534",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Supine position",
          explanation: "Incorrect.",
          question_id: "q534",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Semi-supine position",
          explanation: "Incorrect.",
          question_id: "q534",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Trendelenburg position",
          explanation: "Incorrect.",
          question_id: "q534",
          is_correct: false,
        },
      ],
    },
    {
      id: "q535",
      content:
        "What complications might arise if a tooth extraction is performed on a patient with diabetes?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Patients with diabetes are at a higher risk of complications following tooth extraction due to their impaired healing ability. High blood sugar levels can affect the body's ability to heal, leading to delayed healing. This can increase the risk of infection and other complications.",
      choices: [
        {
          id: "c1",
          content: "Delayed healing",
          explanation: "Correct!",
          question_id: "q535",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Immediate recovery",
          explanation: "Incorrect.",
          question_id: "q535",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Increased saliva production",
          explanation: "Incorrect.",
          question_id: "q535",
          is_correct: false,
        },
        {
          id: "c4",
          content: "No complications",
          explanation: "Incorrect.",
          question_id: "q535",
          is_correct: false,
        },
      ],
    },
    {
      id: "q572",
      content:
        "What is the appropriate course of action if bleeding does not cease during a direct pulp capping procedure?",
      category_id: "geography",
      image_url: "",
      explanation:
        "During a direct pulp capping procedure, if bleeding does not stop, the appropriate course of action is to apply a hemostatic agent and wait for the bleeding to stop before continuing. Continuing with the procedure regardless could lead to further complications, and immediate referral to an oral surgeon or scheduling a root canal treatment may not be necessary if the bleeding can be controlled with a hemostatic agent.",
      choices: [
        {
          id: "c1",
          content: "Continue with the procedure regardless",
          explanation: "Incorrect.",
          question_id: "q572",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Immediately refer the patient to an oral surgeon",
          explanation: "Incorrect.",
          question_id: "q572",
          is_correct: false,
        },
        {
          id: "c3",
          content:
            "Terminate the procedure and schedule a root canal treatment",
          explanation: "Incorrect.",
          question_id: "q572",
          is_correct: false,
        },
        {
          id: "c4",
          content:
            "Apply a hemostatic agent and wait for the bleeding to stop before continuing",
          explanation: "Correct!",
          question_id: "q572",
          is_correct: true,
        },
      ],
    },
    {
      id: "q573",
      content:
        "If a patient experiences disappearance of the interdental papilla, which of the following oral hygiene tools should they use?",
      category_id: "geography",
      image_url: "",
      explanation:
        "When the interdental papilla disappears, it creates a larger space between the teeth. An interdental toothbrush is designed to clean these larger spaces and is therefore the most suitable tool for a patient with this condition. Super floss and standard dental floss are more effective in cleaning tight spaces between teeth, while mouthwash is not a substitute for mechanical cleaning.",
      choices: [
        {
          id: "c1",
          content: "Super floss",
          explanation: "Incorrect.",
          question_id: "q573",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Standard dental floss",
          explanation: "Incorrect.",
          question_id: "q573",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Interdental toothbrush",
          explanation: "Correct!",
          question_id: "q573",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Mouthwash",
          explanation: "Incorrect.",
          question_id: "q573",
          is_correct: false,
        },
      ],
    },
    {
      id: "q574",
      content:
        "If a tooth has been avulsed and reimplanted within 40 minutes, for how many weeks should it be splinted?",
      category_id: "geography",
      image_url: "",
      explanation:
        "If a tooth has been avulsed and reimplanted within 40 minutes, it should be splinted for 2 weeks. This is to allow the periodontal ligament cells to reattach to the tooth root and to the bone. The splint should be flexible to allow for physiological tooth movement, which is beneficial for healing.",
      choices: [
        {
          id: "c1",
          content: "1 week",
          explanation: "Incorrect.",
          question_id: "q574",
          is_correct: false,
        },
        {
          id: "c2",
          content: "2 weeks",
          explanation: "Correct!",
          question_id: "q574",
          is_correct: true,
        },
        {
          id: "c3",
          content: "3 weeks",
          explanation: "Incorrect.",
          question_id: "q574",
          is_correct: false,
        },
        {
          id: "c4",
          content: "4 weeks",
          explanation: "Incorrect.",
          question_id: "q574",
          is_correct: false,
        },
      ],
    },
    {
      id: "q578",
      content:
        "A radiograph shows a third molar tooth enclosed in a cyst. What would be the most appropriate management for this condition?",
      category_id: "geography",
      image_url: "https://picsum.photos/400/200",
      explanation:
        "The most appropriate management for a third molar tooth enclosed in a cyst is surgical removal of both the tooth and the cyst. This is because the cyst can continue to grow and cause damage to surrounding structures. Antibiotics are not effective in treating cysts, and root canal treatment is not indicated as the problem is not within the tooth but surrounding it. Leaving it untreated could lead to further complications.",
      choices: [
        {
          id: "c1",
          content: "Surgical removal of tooth and cyst",
          explanation: "Correct!",
          question_id: "q578",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Prescribe antibiotics and monitor",
          explanation: "Incorrect.",
          question_id: "q578",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Perform root canal treatment",
          explanation: "Incorrect.",
          question_id: "q578",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Leave it untreated and monitor",
          explanation: "Incorrect.",
          question_id: "q578",
          is_correct: false,
        },
      ],
    },
    {
      id: "q580",
      content:
        "What is the possible complication when administering local anesthesia with epinephrine to a patient with controlled hypothyroidism?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Patients with controlled hypothyroidism can safely receive local anesthesia with epinephrine. Thyroid crisis and myxedema coma are complications associated with uncontrolled hypothyroidism, not controlled. Hyperthyroidism is a completely different condition. Therefore, there should be no complications when administering local anesthesia with epinephrine to a patient with controlled hypothyroidism.",
      choices: [
        {
          id: "c1",
          content: "Thyroid crisis",
          explanation: "Incorrect.",
          question_id: "q580",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Myxedema coma",
          explanation: "Incorrect.",
          question_id: "q580",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Hyperthyroidism",
          explanation: "Incorrect.",
          question_id: "q580",
          is_correct: false,
        },
        {
          id: "c4",
          content: "No complications",
          explanation: "Correct!",
          question_id: "q580",
          is_correct: true,
        },
      ],
    },
    {
      id: "q581",
      content:
        "A 60-year-old female patient presents with bullae, oral ulcers, and conjunctivitis. These are signs of mucous membrane pemphigoid. What is the most appropriate treatment for this condition?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Mucous membrane pemphigoid is a rare chronic autoimmune subepithelial blistering disease characterized by erosive skin lesions of the mucous membranes and skin. The mainstay of treatment is systemic corticosteroids, which help to reduce inflammation and suppress the immune system's abnormal response.",
      choices: [
        {
          id: "c1",
          content: "Corticosteroids",
          explanation: "Correct!",
          question_id: "q581",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Antibiotics",
          explanation: "Incorrect.",
          question_id: "q581",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Analgesics",
          explanation: "Incorrect.",
          question_id: "q581",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Antiviral medication",
          explanation: "Incorrect.",
          question_id: "q581",
          is_correct: false,
        },
      ],
    },
    {
      id: "q582",
      content:
        "What could be the potential causes of a median diastema in a 17-year-old patient?",
      category_id: "geography",
      image_url: "",
      explanation:
        "A median diastema, which is a gap between the two upper front teeth, can be caused by several factors. One of the most common causes is a low frenal attachment. This is when the band of tissue that connects the lip to the gums is attached too close to the teeth, causing a space to form. Cross bite, overbite, and underbite are malocclusion conditions and they do not directly cause median diastema.",
      choices: [
        {
          id: "c1",
          content: "Cross bite",
          explanation: "Incorrect.",
          question_id: "q582",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Low frenal attachment",
          explanation: "Correct!",
          question_id: "q582",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Overbite",
          explanation: "Incorrect.",
          question_id: "q582",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Underbite",
          explanation: "Incorrect.",
          question_id: "q582",
          is_correct: false,
        },
      ],
    },
    {
      id: "q583",
      content:
        "Which of the following statements is true regarding a pseudo Class III malocclusion?",
      category_id: "geography",
      image_url: "",
      explanation:
        "A pseudo Class III malocclusion, also known as a pseudo prognathic malocclusion, is characterized by a forward shift of the mandible, which gives the appearance of a Class III malocclusion. However, the underlying skeletal relationship is Class I. This condition is often caused by an interference in the bite that forces the lower jaw forward. The molar relationship can vary, but it is not a defining characteristic of a pseudo Class III malocclusion.",
      choices: [
        {
          id: "c1",
          content: "It is characterized by a skeletal Class I relationship",
          explanation: "Correct!",
          question_id: "q583",
          is_correct: true,
        },
        {
          id: "c2",
          content: "It is characterized by a Class I molar relationship",
          explanation: "Incorrect.",
          question_id: "q583",
          is_correct: false,
        },
        {
          id: "c3",
          content: "It is characterized by a skeletal Class II relationship",
          explanation: "Incorrect.",
          question_id: "q583",
          is_correct: false,
        },
        {
          id: "c4",
          content: "It is characterized by a Class II molar relationship",
          explanation: "Incorrect.",
          question_id: "q583",
          is_correct: false,
        },
      ],
    },
    {
      id: "q584",
      content:
        "What is the appropriate course of action for a case involving an ankylosed primary tooth with no permanent successor buds present?",
      category_id: "geography",
      image_url: "",
      explanation:
        "An ankylosed primary tooth with no permanent successor buds present is a complex case that requires specialist intervention. Ankylosis is a condition where the tooth becomes fused with the bone, preventing it from exfoliating naturally. In cases where there are no permanent successor buds, the primary tooth may not fall out on its own, leading to potential complications. A specialist, such as a pediatric dentist or an orthodontist, would be able to provide appropriate treatment options.",
      choices: [
        {
          id: "c1",
          content: "Refer to a specialist",
          explanation: "Correct!",
          question_id: "q584",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Perform a root canal",
          explanation: "Incorrect.",
          question_id: "q584",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Prescribe antibiotics",
          explanation: "Incorrect.",
          question_id: "q584",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Monitor without intervention",
          explanation: "Incorrect.",
          question_id: "q584",
          is_correct: false,
        },
      ],
    },
    {
      id: "q585",
      content:
        "What is the appropriate course of action if a molar tooth is in close proximity to the Inferior Alveolar Nerve (IAN)?",
      category_id: "geography",
      image_url: "",
      explanation:
        "If a molar tooth is in close proximity to the Inferior Alveolar Nerve (IAN), it is recommended to refer the patient to an Oral and Maxillofacial Surgeon (OMFS). This is because the OMFS has the specialized training to manage such cases and to minimize the risk of nerve damage during extraction or other surgical procedures. The other options are not appropriate as they could lead to nerve damage and subsequent complications such as numbness or pain.",
      choices: [
        {
          id: "c1",
          content: "Refer to an Oral and Maxillofacial Surgeon (OMFS)",
          explanation: "Correct!",
          question_id: "q585",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Extract the tooth immediately",
          explanation: "Incorrect.",
          question_id: "q585",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Perform a root canal treatment",
          explanation: "Incorrect.",
          question_id: "q585",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Prescribe antibiotics and monitor the situation",
          explanation: "Incorrect.",
          question_id: "q585",
          is_correct: false,
        },
      ],
    },
    {
      id: "q586",
      content:
        "A patient has received a punch to the face. Which clinical feature would be most indicative of a potential facial fracture?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In cases of facial trauma, an alteration in occlusion, or the way the upper and lower teeth come together, is a strong indicator of a potential facial fracture. While swelling, bleeding, and hematoma formation can occur with soft tissue injuries, they are not as specific to fractures as changes in occlusion.",
      choices: [
        {
          id: "c1",
          content: "Presence of swelling",
          explanation: "Incorrect.",
          question_id: "q586",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Occurrence of bleeding",
          explanation: "Incorrect.",
          question_id: "q586",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Alteration in occlusion",
          explanation: "Correct!",
          question_id: "q586",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Formation of a hematoma",
          explanation: "Incorrect.",
          question_id: "q586",
          is_correct: false,
        },
      ],
    },
    {
      id: "q587",
      content:
        "A patient was involved in a car accident. Which clinical feature is most indicative of a potential facial fracture?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In the context of a car accident, a change in occlusion is a strong indicator of a potential facial fracture. While edema, bleeding, and hematoma can occur due to soft tissue injuries, a change in occlusion specifically suggests a possible skeletal or dental injury that could be associated with a facial fracture.",
      choices: [
        {
          id: "c1",
          content: "Presence of edema",
          explanation: "Incorrect.",
          question_id: "q587",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Occurrence of bleeding",
          explanation: "Incorrect.",
          question_id: "q587",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Change in occlusion",
          explanation: "Correct!",
          question_id: "q587",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Formation of a hematoma",
          explanation: "Incorrect.",
          question_id: "q587",
          is_correct: false,
        },
      ],
    },
    {
      id: "q588",
      content:
        "In the management of endodontic-periodontic lesions, which condition should be treated first?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In the management of endodontic-periodontic lesions, endodontic treatment is typically initiated first. This is because the endodontic infection may exacerbate the periodontal condition, and thus managing the endodontic issue first can help improve the overall prognosis. However, the specific treatment plan may vary depending on the individual patient's condition and needs.",
      choices: [
        {
          id: "c1",
          content: "Endodontic treatment then periodontic treatment",
          explanation: "Correct!",
          question_id: "q588",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Periodontic treatment then endodontic treatment",
          explanation: "Incorrect.",
          question_id: "q588",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Both treatments should be initiated simultaneously",
          explanation: "Incorrect.",
          question_id: "q588",
          is_correct: false,
        },
        {
          id: "c4",
          content:
            "Neither treatment should be initiated until further diagnostic tests are conducted",
          explanation: "Incorrect.",
          question_id: "q588",
          is_correct: false,
        },
      ],
    },
    {
      id: "q589",
      content:
        "A patient presents with isolated pockets and was previously treated with a serrated post. The patient does not respond to cold and Electric pulp tests, but experiences pain while biting, eating, or when the tooth is percussed or palpated. What would be the most likely endodontic diagnosis in this scenario?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The patient's symptoms of pain on biting, eating, and percussion or palpation, along with the lack of response to cold and Electric pulp tests, suggest that the pulp is necrotic. The pain indicates that there is inflammation in the periapical tissues, which is symptomatic apical periodontitis. Asymptomatic apical periodontitis would not cause pain. A vertical root fracture could cause similar symptoms, but is less likely in this scenario. Irreversible pulpitis would typically cause a response to cold and Electric pulp tests.",
      choices: [
        {
          id: "c1",
          content: "Pulp necrosis with asymptomatic apical periodontitis",
          explanation: "Incorrect.",
          question_id: "q589",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Pulp necrosis with symptomatic apical periodontitis",
          explanation: "Correct!",
          question_id: "q589",
          is_correct: true,
        },
        {
          id: "c3",
          content: "Vertical root fracture",
          explanation: "Incorrect.",
          question_id: "q589",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Irreversible pulpitis",
          explanation: "Incorrect.",
          question_id: "q589",
          is_correct: false,
        },
      ],
    },
    {
      id: "q590",
      content: "What is the cause of a unilateral maxillary crossbite?",
      category_id: "geography",
      image_url: "",
      explanation:
        "A unilateral maxillary crossbite is typically caused by unilateral maxillary constriction. This condition occurs when one side of the maxilla (upper jaw) is narrower than the other, causing the upper teeth on one side to bite inside the lower teeth. This can be due to various reasons including genetics, thumb sucking, or other oral habits.",
      choices: [
        {
          id: "c1",
          content: "Unilateral maxillary constriction",
          explanation: "Correct!",
          question_id: "q590",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Bilateral maxillary constriction",
          explanation: "Incorrect.",
          question_id: "q590",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Unilateral mandibular constriction",
          explanation: "Incorrect.",
          question_id: "q590",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Mandibular expansion",
          explanation: "Incorrect.",
          question_id: "q590",
          is_correct: false,
        },
      ],
    },
    {
      id: "q591",
      content:
        "A patient with a prosthetic heart valve has an International Normalized Ratio (INR) of 2.9 as per the laboratory results. What potential complications could arise if dental work is performed on this patient?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Patients with a prosthetic heart valve often take anticoagulant medications to prevent blood clots. The International Normalized Ratio (INR) is a measure of how long it takes blood to clot. An INR of 2.9 is higher than the normal range (0.8-1.2), indicating that the patient's blood is thinner and takes longer to clot. This could increase the risk of bleeding during dental procedures.",
      choices: [
        {
          id: "c1",
          content: "Increased risk of bleeding",
          explanation: "Correct!",
          question_id: "q591",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Reduced risk of bleeding",
          explanation: "Incorrect.",
          question_id: "q591",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Increased risk of infection",
          explanation: "Incorrect.",
          question_id: "q591",
          is_correct: false,
        },
        {
          id: "c4",
          content: "No complications",
          explanation: "Incorrect.",
          question_id: "q591",
          is_correct: false,
        },
      ],
    },
    {
      id: "q592",
      content:
        "Which of the following is a sign or symptom of the activation of the sympathetic nervous system?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The sympathetic nervous system is part of the autonomic nervous system that prepares the body for 'fight or flight' response during any potential danger. One of the signs of its activation is the constriction of the pupil. This helps to focus the vision. The other options are incorrect as increased urinary motility and relaxation of the abdomen are associated with the parasympathetic nervous system, while increased salivation is not a typical response of the sympathetic nervous system.",
      choices: [
        {
          id: "c1",
          content: "Constriction of the pupil",
          explanation: "Correct!",
          question_id: "q592",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Increased urinary motility",
          explanation: "Incorrect.",
          question_id: "q592",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Relaxation of the abdomen",
          explanation: "Incorrect.",
          question_id: "q592",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Increased salivation",
          explanation: "Incorrect.",
          question_id: "q592",
          is_correct: false,
        },
      ],
    },
    {
      id: "q593",
      content:
        "A patient with a history of hypertension presents with the following laboratory results: blood pressure of 90/50 mmHg, heart rate of 50 beats per minute, and respiratory rate of 25 breaths per minute. What is the most appropriate course of action?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The patient's vital signs indicate a state of hypotension (low blood pressure) and bradycardia (slow heart rate), which could be a sign of a serious underlying condition such as heart failure. In such a situation, it is critical to administer appropriate medication to stabilize the patient's condition and call for an ambulance to ensure immediate medical attention. Proceeding with the dental procedure or simply delaying the appointment could put the patient's health at serious risk.",
      choices: [
        {
          id: "c1",
          content: "Proceed with the dental procedure as planned",
          explanation: "Incorrect.",
          question_id: "q593",
          is_correct: false,
        },
        {
          id: "c2",
          content:
            "Delay the appointment until the patient's vital signs stabilize",
          explanation: "Incorrect.",
          question_id: "q593",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Administer medication and call for an ambulance",
          explanation: "Correct!",
          question_id: "q593",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Refer the patient to a cardiologist",
          explanation: "Incorrect.",
          question_id: "q593",
          is_correct: false,
        },
      ],
    },
    {
      id: "q594",
      content:
        "A patient presents to the clinic with signs and symptoms including an elevated heart rate, aggressive behavior, and excessive sweating. What is the most likely diagnosis?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The symptoms described - elevated heart rate, aggressive behavior, and excessive sweating - are more indicative of an anxiety disorder. While these symptoms can be present in other conditions such as vasovagal syncope and hypoglycemia, the presence of aggressive behavior is more commonly associated with anxiety disorders. Vasovagal syncope typically presents with fainting or near-fainting, while hypoglycemia would likely present with additional symptoms such as confusion, hunger, and shakiness.",
      choices: [
        {
          id: "c1",
          content: "Vasovagal syncope",
          explanation: "Incorrect.",
          question_id: "q594",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Hypoglycemia",
          explanation: "Incorrect.",
          question_id: "q594",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Hyperglycemia",
          explanation: "Incorrect.",
          question_id: "q594",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Anxiety disorder",
          explanation: "Correct!",
          question_id: "q594",
          is_correct: true,
        },
      ],
    },
    {
      id: "q595",
      content:
        "Which term refers to the narrowed location in the root of a tooth?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The term 'Apical constriction' refers to the narrowed location in the root of a tooth. It is the narrowest part of the root canal and is located at or near the cemento-dentinal junction. The radiographic apex is the end of the root as seen on a radiograph, which may not coincide with the actual end of the root. Biological constriction and cervical constriction are not standard terms used in dentistry.",
      choices: [
        {
          id: "c1",
          content: "Apical constrictions",
          explanation: "Correct!",
          question_id: "q595",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Radiographic apex",
          explanation: "Incorrect.",
          question_id: "q595",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Biological constriction",
          explanation: "Incorrect.",
          question_id: "q595",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Cervical constriction",
          explanation: "Incorrect.",
          question_id: "q595",
          is_correct: false,
        },
      ],
    },
    {
      id: "q615",
      content:
        "A pediatric patient aged 8 years presents with multiple abscesses, multiple caries, and fever. Which form of child abuse is most likely indicated by these symptoms?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The presence of multiple dental abscesses and caries in a child, especially when accompanied by fever, may suggest neglect. This is because these conditions are often preventable with proper oral hygiene and regular dental check-ups. Neglect is a form of child abuse where a parent or caregiver fails to provide adequate health care, supervision, or meet the child's basic needs. In this case, it appears the child's oral health needs have not been met, suggesting neglect.",
      choices: [
        {
          id: "c1",
          content: "Sexual abuse",
          explanation: "Incorrect.",
          question_id: "q615",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Physical abuse",
          explanation: "Incorrect.",
          question_id: "q615",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Neglect",
          explanation: "Correct!",
          question_id: "q615",
          is_correct: true,
        },
        {
          id: "c4",
          content: "Emotional abuse",
          explanation: "Incorrect.",
          question_id: "q615",
          is_correct: false,
        },
      ],
    },
    {
      id: "q617",
      content:
        "What is the acceptable limit of bacterial colony forming units (CFUs) per milliliter in dental unit water lines, as recommended by the Centers for Disease Control and Prevention (CDC)?",
      category_id: "geography",
      image_url: "",
      explanation:
        "The Centers for Disease Control and Prevention (CDC) recommends that the bacterial count in dental unit water lines should not exceed 500 colony forming units (CFUs) per milliliter. This is to prevent the spread of waterborne infections in dental settings.",
      choices: [
        {
          id: "c1",
          content: "500 CFUs/ml",
          explanation: "Correct!",
          question_id: "q617",
          is_correct: true,
        },
        {
          id: "c2",
          content: "600 CFUs/ml",
          explanation: "Incorrect.",
          question_id: "q617",
          is_correct: false,
        },
        {
          id: "c3",
          content: "5000 CFUs/ml",
          explanation: "Incorrect.",
          question_id: "q617",
          is_correct: false,
        },
        {
          id: "c4",
          content: "7000 CFUs/ml",
          explanation: "Incorrect.",
          question_id: "q617",
          is_correct: false,
        },
      ],
    },
    {
      id: "q621",
      content:
        "Which type of dental sealer typically has the longest setting time?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Bioceramic sealers typically have the longest setting time among dental sealers. This is because they are designed to be used in situations where a longer working time is needed, such as in complex root canal procedures. The other options, zinc phosphate, glass ionomer, and resin-based sealers, generally have shorter setting times.",
      choices: [
        {
          id: "c1",
          content: "Bioceramic sealer",
          explanation: "Correct!",
          question_id: "q621",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Zinc phosphate sealer",
          explanation: "Incorrect.",
          question_id: "q621",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Glass ionomer sealer",
          explanation: "Incorrect.",
          question_id: "q621",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Resin-based sealer",
          explanation: "Incorrect.",
          question_id: "q621",
          is_correct: false,
        },
      ],
    },
    {
      id: "q623",
      content:
        "What is the most likely diagnosis for a patient who presents with a J-shaped radiographic feature and pain upon biting, as previously discussed?",
      category_id: "geography",
      image_url: "",
      explanation:
        "A J-shaped radiographic feature and pain upon biting are characteristic symptoms of a vertical root fracture (VRF). Horizontal root fractures typically present differently, and a normal condition requiring retreatment of root canal therapy would not cause these symptoms. A cracked tooth could potentially cause pain upon biting, but it would not typically present with a J-shaped radiographic feature.",
      choices: [
        {
          id: "c1",
          content: "Horizontal root fracture",
          explanation: "Incorrect.",
          question_id: "q623",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Vertical root fracture",
          explanation: "Correct!",
          question_id: "q623",
          is_correct: true,
        },
        {
          id: "c3",
          content:
            "Normal condition requiring retreatment of root canal therapy",
          explanation: "Incorrect.",
          question_id: "q623",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Cracked tooth",
          explanation: "Incorrect.",
          question_id: "q623",
          is_correct: false,
        },
      ],
    },
    {
      id: "q625",
      content:
        "What is the most likely diagnosis for a patient exhibiting compromised health, absence of the clavicle, and Brachycephaly?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Cleidocranial dysplasia is a rare genetic disorder characterized by delayed closure of cranial sutures, absence or underdevelopment of clavicles, and dental abnormalities. The patient's symptoms of compromised health, absence of the clavicle, and Brachycephaly are indicative of this condition. Pierre Robin syndrome is characterized by a small lower jaw, a tongue that falls back in the throat, and difficulty breathing; it does not typically involve the clavicle. Cushing's syndrome is a hormonal disorder caused by prolonged exposure to high levels of cortisol; it does not involve the clavicle or cranial sutures. Down syndrome is a genetic disorder caused by the presence of all or part of a third copy of chromosome 21; it is not typically associated with the absence of the clavicle or Brachycephaly.",
      choices: [
        {
          id: "c1",
          content: "Cleidocranial dysplasia",
          explanation: "Correct!",
          question_id: "q625",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Pierre Robin syndrome",
          explanation: "Incorrect.",
          question_id: "q625",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Cushing's syndrome",
          explanation: "Incorrect.",
          question_id: "q625",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Down syndrome",
          explanation: "Incorrect.",
          question_id: "q625",
          is_correct: false,
        },
      ],
    },
    {
      id: "q628",
      content:
        "How does orthodontic treatment in adults compare to that in teenagers in terms of time and force required?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Orthodontic treatment in adults typically requires more time than in teenagers. This is due to the fact that adult bones are no longer growing and are therefore less responsive to the forces applied during orthodontic treatment. As a result, the teeth move more slowly and the treatment takes longer. The force applied is not necessarily more, but the duration of force application is longer.",
      choices: [
        {
          id: "c1",
          content: "It requires more time and more force",
          explanation: "Correct!",
          question_id: "q628",
          is_correct: true,
        },
        {
          id: "c2",
          content: "It requires less time and more force",
          explanation: "Incorrect.",
          question_id: "q628",
          is_correct: false,
        },
        {
          id: "c3",
          content: "It requires more time and less force",
          explanation: "Incorrect.",
          question_id: "q628",
          is_correct: false,
        },
        {
          id: "c4",
          content: "It requires less time and less force",
          explanation: "Incorrect.",
          question_id: "q628",
          is_correct: false,
        },
      ],
    },
    {
      id: "q631",
      content:
        "What is the correct sequence of treatment in an endodontic-periodontic lesion?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In the case of an endodontic-periodontic lesion, the correct sequence of treatment is to first address the endodontic issue and then proceed with the periodontic treatment. This is because the endodontic treatment can help to eliminate the source of infection, which can then allow the periodontic treatment to be more effective.",
      choices: [
        {
          id: "c1",
          content: "Endodontic treatment followed by periodontic treatment",
          explanation: "Correct!",
          question_id: "q631",
          is_correct: true,
        },
        {
          id: "c2",
          content: "Periodontic treatment followed by endodontic treatment",
          explanation: "Incorrect.",
          question_id: "q631",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Endodontic treatment followed by regular follow-up",
          explanation: "Incorrect.",
          question_id: "q631",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Periodontic treatment followed by regular follow-up",
          explanation: "Incorrect.",
          question_id: "q631",
          is_correct: false,
        },
      ],
    },
    {
      id: "q633",
      content:
        "What is the likely outcome if an alginate impression is disinfected for 10 minutes and the pouring is performed an hour later?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Alginate impressions are hydrophilic and can undergo syneresis and imbibition. If an alginate impression is left to sit for an hour before pouring, it will lose water and shrink, resulting in a smaller dimension. Disinfection does not significantly affect the dimensional stability of alginate impressions.",
      choices: [
        {
          id: "c1",
          content:
            "There will be no change in the dimensions of the impression",
          explanation: "Incorrect.",
          question_id: "q633",
          is_correct: false,
        },
        {
          id: "c2",
          content: "The impression will have smaller dimensions",
          explanation: "Correct!",
          question_id: "q633",
          is_correct: true,
        },
        {
          id: "c3",
          content: "The impression will have larger dimensions",
          explanation: "Incorrect.",
          question_id: "q633",
          is_correct: false,
        },
        {
          id: "c4",
          content:
            "The study cast created from the impression will be altered and not accurate",
          explanation: "Incorrect.",
          question_id: "q633",
          is_correct: false,
        },
      ],
    },
    {
      id: "q635",
      content:
        "An asthmatic patient presents to the dental clinic with their inhaler. During the course of treatment, the patient experiences an asthmatic attack. What is the most appropriate course of action for the dentist to take in this situation?",
      category_id: "geography",
      image_url: "",
      explanation:
        "In the event of an asthmatic attack during dental treatment, the most appropriate course of action is to immediately stop the treatment and administer the patient's inhaler. Continuing the treatment could exacerbate the patient's condition and potentially lead to a more severe attack. Administering oxygen or calling for an ambulance may be necessary in more severe cases, but the first step should always be to stop the treatment and administer the inhaler.",
      choices: [
        {
          id: "c1",
          content: "Stop the treatment and administer the inhaler",
          explanation: "Correct!",
          question_id: "q635",
          is_correct: true,
        },
        {
          id: "c2",
          content:
            "Continue the treatment while monitoring the patient's condition",
          explanation: "Incorrect.",
          question_id: "q635",
          is_correct: false,
        },
        {
          id: "c3",
          content: "Administer oxygen and continue the treatment",
          explanation: "Incorrect.",
          question_id: "q635",
          is_correct: false,
        },
        {
          id: "c4",
          content: "Call for an ambulance and continue the treatment",
          explanation: "Incorrect.",
          question_id: "q635",
          is_correct: false,
        },
      ],
    },
    {
      id: "q639",
      content:
        "When is the appropriate time to initiate dental treatment for patients diagnosed with tuberculosis?",
      category_id: "geography",
      image_url: "",
      explanation:
        "Dental treatment for patients diagnosed with tuberculosis should ideally be postponed until the patient has been on anti-tuberculosis treatment for at least two weeks. This is because the patient is most infectious during the initial period of the disease and the risk of transmission decreases significantly after two weeks of treatment.",
      choices: [
        {
          id: "c1",
          content: "Immediately after receiving the diagnosis",
          explanation: "Incorrect.",
          question_id: "q639",
          is_correct: false,
        },
        {
          id: "c2",
          content: "Two weeks after starting tuberculosis treatment",
          explanation: "Correct!",
          question_id: "q639",
          is_correct: true,
        },
        {
          id: "c3",
          content:
            "Simultaneously with the initiation of tuberculosis treatment",
          explanation: "Incorrect.",
          question_id: "q639",
          is_correct: false,
        },
        {
          id: "c4",
          content: "After the completion of tuberculosis treatment",
          explanation: "Incorrect.",
          question_id: "q639",
          is_correct: false,
        },
      ],
    },
  ],
};
