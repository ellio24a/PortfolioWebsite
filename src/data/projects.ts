/* SETS UP EACH PROJECT PAGE */

// EASYPIX FILES (ALL IN src/assets/easypix/)
import easypixTile from '../assets/Easypix.png';
import easypixVideo from '../assets/easypix/easypix-video.mp4';
import easypixPoster from '../assets/easypix/poster.jpg';
import easypixBedroom from '../assets/easypix/bedroom.jpg';
import easypixSuitcase from '../assets/easypix/suitcase.jpg';
import easypixBridge from '../assets/easypix/bridge.jpg';
import easypixEditing from '../assets/easypix/editing.jpg';
import easypixCafe from '../assets/easypix/cafe.jpg';
import easypixProduction from '../assets/easypix/production.jpg';
import btsPlanning from '../assets/easypix/bts-planning.jpg';
import btsChecking from '../assets/easypix/bts-checking.jpg';
import shotPacking1 from '../assets/easypix/shot-packing-1.jpg';
import shotPacking2 from '../assets/easypix/shot-packing-2.jpg';
import shotBed from '../assets/easypix/shot-bed.jpg';
import shotWalking from '../assets/easypix/shot-walking.jpg';

// DORA FILES (ALL IN src/assets/dora/)
import doraVideo from '../assets/dora/dora-demo.mp4';
import doraPoster from '../assets/dora/video-poster.jpg';
import doraPrototype from '../assets/dora/prototype.jpg';
import doraPlates from '../assets/dora/plates-loaded.jpg';
import doraMindMap from '../assets/dora/mind-map.jpg';
import doraSketches from '../assets/dora/sketches.jpg';
import doraCardboard from '../assets/dora/cardboard-model.jpg';
import doraBuilding from '../assets/dora/building.jpg';
import doraStep1 from '../assets/dora/step-1-select.jpg';
import doraStep2 from '../assets/dora/step-2-dry.jpg';
import doraStep3 from '../assets/dora/step-3-both.jpg';
import doraStep4 from '../assets/dora/step-4-place-lid.jpg';
import doraStep5 from '../assets/dora/step-5-confirm.jpg';
import doraStep6 from '../assets/dora/step-6-progress.jpg';
import doraStep7 from '../assets/dora/step-7-finish.jpg';

// UNITY FPS GAME FILES (ALL IN src/assets/unity-fps/)
import unityVideo from '../assets/unity-fps/gameplay.mp4';
import unityTitle from '../assets/unity-fps/01-title-screen.jpg';
import unityCombat from '../assets/unity-fps/02-combat.jpg';
import unityMarker from '../assets/unity-fps/03-enemy-marker.jpg';
import unityDestroy from '../assets/unity-fps/04-destroying-enemy.jpg';
import unityLater from '../assets/unity-fps/05-later-level.jpg';
import unityWin from '../assets/unity-fps/06-win-screen.jpg';

// ENDGRAIN CUTTING BOARD FILES (ALL IN src/assets/endgrain/)
import endgrainPattern from '../assets/endgrain/determining-pattern.jpg';
import endgrainLayout from '../assets/endgrain/final-layout.jpg';
import endgrainGlue from '../assets/endgrain/last-glue-up.jpg';
import endgrainPreOil from '../assets/endgrain/pre-oil-board.jpg';
import endgrainFinished from '../assets/endgrain/finished-board.jpg';

// MAHOGANY MILKING STOOL FILES (ALL IN src/assets/stool/)
import stoolTopGlued from '../assets/stool/top-glued.jpg';
import stoolRoughCut from '../assets/stool/rough-cut-top.jpg';
import stoolLathe from '../assets/stool/turning-on-lathe.jpg';
import stoolLegs from '../assets/stool/finished-legs.jpg';
import stoolJoined from '../assets/stool/joined-legs.jpg';
import stoolFinal from '../assets/stool/final-stool.jpg';
import stoolDrying from '../assets/stool/drying-finish.jpg';

// SIMON SAYS FILES (ALL IN src/assets/simon/)
import simonWiring from '../assets/simon/figuring-out-wiring.jpg';
import simonSkeleton from '../assets/simon/finished-skeleton.jpg';
import simonSkeletonTop from '../assets/simon/skeleton-top-view.jpg';
import simonFinalWiring from '../assets/simon/final-wiring-layout.jpg';
import simonPainted from '../assets/simon/painted-game.jpg';

// DESCRIBES WHAT A PROJECT CAN CONTAIN. A "?" MEANS THE FIELD IS OPTIONAL.
export type ProjectSection = {
  id: string;                               // USED FOR THE "CONTENTS" LINKS
  heading: string;
  paragraphs?: string[];                    // EACH STRING BECOMES ITS OWN PARAGRAPH
  quote?: string;                           // BIG HIGHLIGHTED LINE (e.g. A SLOGAN)
  image?: { src: string; alt: string };     // PICTURE SHOWN BESIDE THE TEXT
  references?: { text: string; url: string }[];
  items?: {                                 // CARDS WITH PICTURES, A TITLE + BULLET POINTS
    title: string;
    points: string[];
    images?: { src: string; alt: string }[];
  }[];
  gallery?: { src: string; caption: string }[];   // PHOTOS WITH CAPTIONS UNDER THE TEXT
  stats?: { value: string; label: string }[];      // BIG NUMBERS (e.g. SURVEY RESULTS)
  steps?: { src: string; caption: string }[];      // NUMBERED STEP-BY-STEP PICTURES
  bullets?: string[];                              // SIMPLE BULLET LIST
};

export type Project = {
  id: string;
  title: string;
  image?: string;                 // PICTURE ON THE PROJECTS PAGE TILE
  imagePosition?: string;         // WHICH PART OF THE TILE PICTURE TO SHOW, e.g. 'center top' (DEFAULT IS THE CENTRE)
  shortDescription: string;       // HOVER TEXT ON THE TILE
  tagline?: string;               // ONE OR TWO SENTENCES UNDER THE TITLE
  video?: string;                 // AN .mp4 FILE YOU IMPORTED
  videoPoster?: string;           // IMAGE SHOWN BEFORE THE VIDEO STARTS
  videoSquare?: boolean;          // true FOR A SQUARE (1:1) VIDEO SO IT ISN'T CROPPED
  imagePortrait?: boolean;        // true FOR A TALL (PORTRAIT) PROJECT IMAGE SO THE WHOLE PICTURE SHOWS AT THE TOP OF THE PAGE
  report?: { url: string; label: string };   // LINK TO THE FULL REPORT (e.g. A PDF)
  facts?: { label: string; value: string }[];
  sections: ProjectSection[];
  technologies: string[];
  reflection?: {                  // PERSONAL REFLECTION, SHOWN AFTER THE GROUP REPORT
    title: string;
    subtitle?: string;
    placeAfter?: string;          // ID OF THE GROUP SECTION IT COMES AFTER (OTHERWISE AT THE END)
    sections: ProjectSection[];
  };
};

export const projects: Project[] = [
  {
    id: 'project-one',
    title: 'Easypix Advertisement Video',
    image: easypixTile,
    shortDescription: 'Click Into the Moment, a story-led advert for the Easypix 35mm film camera.',
    tagline: "Click Into the Moment: a two-minute advert for the Easypix 35mm film camera.",

    video: easypixVideo,
    videoPoster: easypixPoster,

    facts: [
      { label: 'Type', value: 'Group video production' },
      { label: 'Team', value: '5 people' },
      { label: 'Length', value: '2 minutes' },
      { label: 'Filmed on', value: 'iPhone 17 + 35mm film' },
      { label: 'My role', value: 'Videographer & actor' },
    ],

    sections: [
      {
        id: 'introduction',
        heading: 'Introduction',
        image: { src: easypixBedroom, alt: 'The Easypix camera lying on the bed while Lea packs' },
        paragraphs: [
          "For this project, we created a short promotional video for the Easypix 35mm film camera called Click Into the Moment. Our aim was to show how the camera can be used in everyday life while focusing on the memories and experiences that film photography can capture.",
          "The advertisement follows a student preparing to leave Limerick after spending a year studying abroad. While packing, she discovers her Easypix camera, reminding her of the memories she made exploring the city with her friends.",
          "We wanted the advertisement to appeal to young adults who enjoy photography and capturing moments with friends. Rather than focusing only on the camera's features, we used friendship and nostalgia to show how the Easypix camera can help preserve meaningful memories.",
        ],
      },
      {
        id: 'concept',
        heading: 'Concept and Storytelling',
        quote: 'Click Into the Moment',
        image: { src: easypixSuitcase, alt: 'Lea packing her suitcase with the Easypix camera inside' },
        paragraphs: [
          "Our idea for Click Into the Moment was to create an advertisement that tells a story rather than simply showing the camera and its features. We wanted to show how photographs can bring back memories of the people and places that are important to us.",
          "The story begins with Lea packing her belongings before leaving Limerick after her year abroad. While packing, she finds her Easypix camera, which reminds her of her final day exploring the city with her friends. We chose recognisable locations such as the Treaty Stone, St Mary's Cathedral and the Milk Market to show the group enjoying their time together and creating memories.",
          "At the end, the video returns to Lea's bedroom, bringing the story back to the present. We chose this structure to show how a simple photograph can remind someone of a special moment. The slogan Click Into the Moment reflects this idea and encourages people to enjoy the moment while also capturing it. We decided not to include dialogue, allowing the music, photographs and actions of the characters to tell the story.",
        ],
      },
      {
        id: 'cinematography',
        heading: 'Cinematography and Shot Selection',
        image: { src: easypixBridge, alt: "Wide shot of the friends walking across the bridge towards King John's Castle" },
        paragraphs: [
          "During planning, we chose recognisable locations around Limerick, including King John's Castle, St Mary's Cathedral and the Milk Market. We wanted to show the friends exploring the city together and visiting places that would make their final day memorable. Although King John's Castle was removed from the final edit, the other locations helped tell this story.",
          "We used a mixture of wide shots, medium shots and close-ups throughout the video. Wide shots showed the different locations, while medium shots captured the friends walking, laughing and interacting naturally. Close-ups focused on the Easypix camera and showed how it was held and used to take photographs. These shots were also chosen to show the photographer's perspective. By moving between shots of someone taking a photograph and B-roll footage of the moment being captured, we wanted viewers to feel part of the experience rather than just watching the group from a distance.",
          "All footage was filmed in landscape orientation using an iPhone 17 and tripod. Using the tripod helped keep the footage steady and consistent, while the different shot types helped make the video more interesting.",
        ],
      },
      {
        id: 'editing',
        heading: 'Editing and Visual Effects',
        image: { src: easypixEditing, alt: 'The friends exploring the old city walls with the Easypix camera' },
        paragraphs: [
          "We edited the video using CapCut, adding transitions and effects to help tell the story. At the beginning, the video zooms into the Easypix camera lens in Lea's bedroom before zooming back out into the flashback. We used the same transition to return to her bedroom at the end, connecting her memories with the present.",
          "When someone takes a photograph, the footage briefly freezes and the actual developed 35mm photograph appears. This allows viewers to see the results of using the Easypix camera and shows how these moments can be captured and remembered.",
          "During editing, we shortened longer scenes into quicker cuts to keep the video moving. This helped us include footage from different locations within the two-minute time limit while keeping the flashback lively and showing the excitement of the friends spending their final day together.",
          "For the ending, we created a stop-motion sequence showing the Easypix camera surrounded by printed photographs. This brings the focus back to the product and reinforces our slogan, Click Into the Moment.",
        ],
      },
      {
        id: 'sound',
        heading: 'Sound and Music',
        image: { src: easypixCafe, alt: 'The friends sharing a drink in a café while one takes a photo' },
        paragraphs: [
          "For the background music, we chose The Trip by Marat Mukhamadiev (MarkJuly), which we downloaded from Pixabay. We liked its upbeat acoustic sound because it suited the friends exploring Limerick and helped create a happy, nostalgic feeling throughout the video.",
          "We decided not to include dialogue, so the music plays an important role in telling the story and setting the mood. We also added camera shutter-click sound effects whenever a photograph is taken and the developed 35mm image appears. These clicks help connect the photographs to the Easypix camera and make the moments feel more realistic.",
        ],
      },
      {
        id: 'production',
        heading: 'Production Process',
        image: { src: easypixProduction, alt: 'The group eating together while filming in Limerick' },
        paragraphs: [
          "We started by sharing ideas as a group and agreed that we wanted to create an advertisement rather than a short film with dialogue. After choosing the Easypix 35mm camera, we brainstormed different ways to promote it. Our early ideas included a granddaughter looking through photographs with her grandmother and a fun photography trip. We eventually chose Lea's story because it allowed us to combine friendship, memories and photography in a way that felt relatable. We then developed a screenplay and storyboard to plan our filming.",
          "We filmed in Lea's bedroom and around Limerick using an iPhone 17 and tripod, with all five group members helping throughout. Lea's bedroom was chosen because the large window provided natural light, while the overhead lighting helped avoid harsh shadows. The mostly bare walls and neutral colours also suited the story of someone preparing to move away. We chose locations around Limerick city centre that we could visit in one day, showing the friends spending their final day together at some of their favourite places.",
          "One challenge was the weather. Although the day started sunny, it became increasingly overcast, which wasn't ideal for taking film photographs. We decided to continue filming despite this. We were also using expired 35mm film, so we weren't sure how the photographs would turn out. After bringing the film to a photography shop for development, we were happy with the results.",
          "Looking back, choosing a sunnier day and using in-date film would have reduced these risks. We also worked together to create the final stop-motion sequence using the Easypix camera and printed photographs.",
        ],
      },
      {
        id: 'conclusion',
        heading: 'Conclusion',
        paragraphs: [
          "Overall, Click Into the Moment allowed us to combine storytelling, filming and photography to create an advertisement that felt more personal than a traditional product demonstration. By following a group of friends exploring Limerick, we showed how the Easypix 35mm camera can capture everyday moments and turn them into lasting memories.",
          "Working together helped us develop our skills in planning, filming and editing, while also learning to adapt when things didn't go as expected. Using real 35mm film made the project more interesting, as we experienced the challenges and excitement of waiting to see how our photographs turned out. We feel the final video successfully promotes the Easypix camera by connecting it with friendship, nostalgia and the importance of capturing meaningful moments.",
        ],
      },
      {
        id: 'references',
        heading: 'References',
        references: [
          {
            text: 'Mukhamadiev, M. (n.d.) The Trip [Music]. Pixabay. (Accessed: 13 November 2026).',
            url: 'https://pixabay.com/music/upbeat-uplifting-acoustic-indie-folk-the-trip-112317/',
          },
          {
            text: 'Kaua Silbershlach Parodes (n.d.) Shutter Click 2 [Sound effect]. Pixabay. (Accessed: 13 November 2026).',
            url: 'https://pixabay.com/sound-effects/technology-shutter-click-2-494026/',
          },
        ],
      },
    ],

    technologies: ['CapCut', 'iPhone 17', 'Tripod', '35mm Film', 'Screenplay & Storyboard', 'Stop-Motion', 'Sound Design'],

    reflection: {
      title: 'My Reflection',
      placeAfter: 'conclusion',     // SHOWS AFTER "CONCLUSION". DELETE THIS LINE TO PUT IT AT THE VERY END
      subtitle: 'Abby Elliott · Interactive Media Project/Workshop 1 · Video Production Blog',
      sections: [
        {
          id: 'reflection-introduction',
          heading: 'Introduction',
          paragraphs: [
            "The goal of our project was to create an advertisement for the Easypix camera. There are plenty of cameras on the market that take better pictures than the Easypix, so we decided to focus on its nostalgic feel as our main selling point. To bring that across, we told the story of a young woman who finds the camera while she is packing to leave school and flashes back to the memories she made with it. I worked on the project as both an actor and the videographer.",
          ],
        },
        {
          id: 'reflection-contribution',
          heading: 'My Contribution',
          paragraphs: [
            "My main contribution was as the videographer. We all worked together during the shoot to make sure every shot came out the way we wanted, but I took on the brunt of the actual filming. I set up the camera for most of the shots and had everyone rehearse their blocking before filming so I could be sure each shot would look right. I also hung back to film b-roll of the others walking around Limerick, which gave us more authentic-looking footage. I was not very confident taking on this role, but I think I ended up doing a pretty good job.",
          ],
        },
        {
          id: 'reflection-behind-the-scenes',
          heading: 'Behind the Scenes',
          paragraphs: [
            "Because I was trying to film as much b-roll as possible, I did not take many behind-the-scenes photos. The ones I did take show the group working out our final shot. This shot took the longest because everything leading up to it had to be consistent: who had the camera, who gave it to Lea, making sure we all walked out of frame to end the shot, and making sure Lea walked the opposite way with the camera. There were a lot of moving parts. We went over it so many times that I decided to document how tired and stressed we all were, which is why these pictures were taken.",
          ],
          gallery: [
            { src: btsPlanning, caption: 'Photo 1: Planning who is supposed to give Lea the camera at the shop.' },
            { src: btsChecking, caption: 'Photo 2: Checking footage and coordinating which direction we want to walk.' },
          ],
        },
        {
          id: 'reflection-proudest-shots',
          heading: "The Shots I'm Proudest Of",
          paragraphs: [
            "Since I did not take many behind-the-scenes pictures, here are some of my favorite shots from the finished video instead.",
          ],
          items: [
            {
              title: 'Overhead packing shots',
              images: [
                { src: shotPacking1, alt: 'Overhead shot of Lea packing her suitcase with the Easypix camera' },
                { src: shotPacking2, alt: 'Second overhead packing shot from Lea\'s point of view' },
              ],
              points: [
                "I am proudest of this shot because the spacing and layout of the items in the suitcase worked nicely.",
                "I also came up with the idea of standing on a chair behind Lea and filming from her point of view, which turned out far better than expected.",
                "I really liked the lighting here too. Overall, it felt like a really pretty shot.",
              ],
            },
            {
              title: 'Camera set down on the bed',
              images: [{ src: shotBed, alt: 'Lea setting the Easypix camera down on the bed beside her suitcase' }],
              points: [
                "This shot got our point across well, with Lea finding the camera and feeling nostalgic.",
                "The angle made all the difference. We positioned it so that both the camera and the suitcase were visible without it looking too low, and the continuity with the previous shot was excellent.",
              ],
            },
            {
              title: 'Walking shot down the street',
              images: [{ src: shotWalking, alt: 'The friends walking down a street towards the church' }],
              points: [
                "The color scheme and lighting as we walk up to and through the church cemetery looked far better than expected.",
                "I am proudest of this shot because it was the most stable of all my b-roll footage, despite my walking on cobblestones.",
              ],
            },
          ],
        },
        {
          id: 'reflection-challenges',
          heading: "Challenges and What I'd Do Differently",
          paragraphs: [
            "Our biggest challenge was that the camera did not take photos the way we expected. We only found out after the film was developed that two of our shots were missing, because the camera had not taken the picture when we clicked it. The group considered making replacement images by editing screenshots of the video, but I did not think we could ever match the quality of the real photos from the camera. I suggested cutting those scenes and turning the footage into b-roll instead, which kept the continuity intact. It worked out okay in the end, since we needed that time for other parts of the video.",
            "If I could redo the assignment, the biggest change I would make is paying closer attention to the camera and taking backup photos, or at least having a contingency plan, so we could be sure we had every shot. I would also have preferred to film on a sunny day, but there was not much we could do about that.",
          ],
        },
        {
          id: 'reflection-conclusion',
          heading: 'Conclusion',
          paragraphs: [
            "Overall, this project taught me a lot about what to expect from a film shoot and how to solve problems on the fly. I feel much more confident in my ability as a videographer now, and our final product ended up way better than I had expected.",
          ],
        },
      ],
    },
  },

  //SAME STRUCTURE FOR EACH PROJECT
  {
    id: 'project-two',
    title: 'DORA: Interactive Dish Dryer',
    image: doraPrototype,
    shortDescription: 'A Wizard of Oz prototype of a fast dish dryer that frees up space in shared kitchens.',
    tagline: "An interactive dish dryer prototype designed to free up drying space in shared kitchens.",

    video: doraVideo,
    videoPoster: doraPoster,
    videoSquare: true,

    facts: [
      { label: 'Type', value: 'Group interaction design project' },
      { label: 'Team', value: '3 people' },
      { label: 'Prototype', value: 'Low-fidelity foam board' },
      { label: 'Method', value: 'Wizard of Oz' },
      // { label: 'My role', value: 'ADD YOUR ROLE HERE' },
    ],

    sections: [
      {
        id: 'dora-problem',
        heading: 'The Problem',
        paragraphs: [
          "In shared student kitchens, one dish rack serves everyone. When housemates cook and wash up one after another, the rack fills up fast and the last person has nowhere to put their dishes. Racks also collect water, are hard to clean and give no feedback on whether dishes are actually dry.",
          "We surveyed 11 postgraduate students who all share a kitchen with housemates:",
        ],
        stats: [
          { value: '63.6%', label: 'said their rack fills up very quickly' },
          { value: '54.5%', label: 'called their rack an eyesore' },
          { value: '0', label: 'said their rack is aesthetically pleasing' },
        ],
      },
      {
        id: 'dora-idea',
        heading: 'The Idea',
        image: { src: doraPlates, alt: 'The foam-board prototype tray loaded with paper plates' },
        paragraphs: [
          "DORA (Dish Organization and Rapid Air-drying) is a countertop dish dryer designed to dry and sanitize a small load of dishes in about 5–10 minutes. One person can dry their dishes straight after washing up and put them away, leaving the space free for the next person.",
          "Unlike a passive rack, DORA gives users control and feedback. They choose a cycle (Dry, Sanitize or Both), are prompted to fit the lid, watch a progress bar while it runs and are told clearly when their dishes are ready.",
        ],
      },
      {
        id: 'dora-process',
        heading: 'Design Process',
        paragraphs: [
          "We started with a better dish rack. Mind mapping, whiteboard brainstorming and sketching produced ideas like modular and double-decker racks and a sloped tray that drains into the sink, and we built a cardboard model to test the layout.",
          "Reviewing that model with our lecturer, we realized a rack is too passive: it gives users almost nothing to interact with. We returned to an idea from our first mind map, adding heat, and developed it into a dryer that reduces how long dishes take up shared space and guides the user through each step.",
        ],
        gallery: [
          { src: doraMindMap, caption: 'Mind mapping everyday frustrations' },
          { src: doraSketches, caption: 'Sketching rack layouts and drainage' },
          { src: doraCardboard, caption: 'First cardboard model of a modular rack' },
          { src: doraBuilding, caption: 'Building the foam-board prototype' },
        ],
      },
      {
        id: 'dora-interaction',
        heading: 'How It Works',
        paragraphs: [
          "The prototype focuses on the interaction with the front panel. The screen is a strip of hand-drawn screens pulled through a frame by a group member (the Wizard of Oz method), who also makes a beep for each button press and a chime when the cycle finishes. If the user tries to start without the lid, the screen stops them and asks them to fit it first.",
        ],
        steps: [
          { src: doraStep1, caption: 'Power on and select a cycle' },
          { src: doraStep2, caption: 'Browse to Dry…' },
          { src: doraStep3, caption: '…or Both' },
          { src: doraStep4, caption: 'Reminder to place the lid' },
          { src: doraStep5, caption: 'Confirm the cycle' },
          { src: doraStep6, caption: 'Progress bar while it runs' },
          { src: doraStep7, caption: 'Finished: unload the dishes' },
        ],
      },
      {
        id: 'dora-evaluation',
        heading: 'Usability Review',
        paragraphs: [
          "We planned a cognitive walkthrough and reviewed the design against Nielsen's ten usability heuristics.",
        ],
        bullets: [
          "Visibility of system status: the beep, progress bar and finish chime show each stage of the cycle.",
          "Error prevention: the lid prompt stops a cycle from starting until the lid is in place.",
          "Gaps found: no way to go back after choosing a cycle, and no help for loading dishes or understanding the options.",
        ],
      },
      {
        id: 'dora-next',
        heading: 'Next Steps',
        paragraphs: [
          "The prototype is low fidelity: it doesn't model heat, airflow or real timing, and the 5–10 minute cycle is a design goal. The next phase is user testing, to learn whether the prompts are intuitive, whether the cycle options are clear and what users think is missing.",
        ],
      },
    ],

    technologies: ['Mind Mapping', 'Brainstorming', 'Sketching', 'User Survey', 'Cardboard Prototyping', 'Foam Board', 'Storyboarding', 'Wizard of Oz', 'Heuristic Evaluation'],
  },
  {
    id: 'unity-fps-game',
    title: 'Unity FPS Game',
    image: unityCombat,
    shortDescription: 'A first-person shooter built in Unity, using the FPS Microgame template to learn the engine and design my own linked levels.',
    tagline: 'A first-person shooter built in Unity, with levels I redesigned from the FPS Microgame template and linked into one game.',

    video: unityVideo,
    videoPoster: unityTitle,

    facts: [
      { label: 'Type', value: 'University Unity course project' },
      { label: 'Engine', value: 'Unity 2020.3' },
      { label: 'Based on', value: 'FPS Microgame template' },
      { label: 'Levels', value: '3' },
      { label: 'Gameplay', value: 'About 3 minutes' },
    ],

    sections: [
      {
        id: 'unity-overview',
        heading: 'Overview',
        image: { src: unityTitle, alt: 'The game title screen with the controls and a play button' },
        paragraphs: [
          "I built this 3D first-person shooter as the final project for a university Unity course. The brief was to build a game on the course template, keep it to around five minutes, and use advanced techniques such as loading levels, level design and camera techniques.",
          "I used Unity's FPS Microgame template as my starting point. I followed the basic tutorial to learn how Unity works, then used those skills to create new levels of my own. The player defeats every enemy in a level to move on, and the game ends on a win screen.",
        ],
      },
      {
        id: 'unity-challenge',
        heading: 'The Challenge',
        image: { src: unityLater, alt: 'A later level with a different layout from the first level' },
        paragraphs: [
          "The challenge was learning how to use Unity and then going beyond the tutorial. The template comes with preset levels, so I wanted each of my scenes to look and play differently from them instead of reusing what was already there.",
        ],
      },
      {
        id: 'unity-process',
        heading: 'My Process',
        image: { src: unityDestroy, alt: 'The player destroying an enemy robot' },
        paragraphs: [
          "I started by following the basic FPS Microgame tutorial to get comfortable with the editor. I then created new levels and changed each scene so it was different from the preset levels in the template.",
          "To make the levels feel like one connected game, I created new game scenes and linked them together, so defeating all the enemies in one level loads the next.",
        ],
      },
      {
        id: 'unity-learned',
        heading: 'What I Learned',
        bullets: [
          'Working with shapes in a scene to build and change level layouts',
          'Moving the player and setting up the player view',
          'Working with prefabs',
          'Creating new game scenes and linking them to build level progression',
          'Changing wall colors and textures',
          'Coding components',
        ],
      },
      {
        id: 'unity-screenshots',
        heading: 'Screenshots',
        gallery: [
          { src: unityTitle, caption: 'Title screen with controls and play button' },
          { src: unityCombat, caption: 'Combat: shooting an enemy robot' },
          { src: unityMarker, caption: 'Enemy marker and compass guiding the player' },
          { src: unityDestroy, caption: 'Destroying an enemy' },
          { src: unityLater, caption: 'A later level with a different layout' },
          { src: unityWin, caption: 'Win screen after the final level' },
        ],
      },
      {
        id: 'unity-outcome',
        heading: 'Outcome',
        image: { src: unityWin, alt: 'The win screen shown after the final level' },
        paragraphs: [
          "The result is a playable game with a title screen, three levels that I changed and redesigned from the template presets, level progression, and a win screen, with a gameplay run of about three minutes. It gave me a working understanding of the Unity editor, prefabs, scene management and component scripting that I can build on in future projects.",
        ],
      },
    ],

    technologies: ['Unity 2020.3', 'C#', 'FPS Microgame template', 'Level design', 'Scene management', 'Prefabs', 'Materials and textures'],
  },
  {
    id: 'endgrain-cutting-board',
    title: 'Endgrain Cutting Board',
    image: endgrainFinished,
    shortDescription: 'A hand-built end-grain cutting board, from pattern planning and glue-up to flattening, beveling and oiling.',
    tagline: 'A study in end-grain construction: designing a block pattern, joining it by hand and finishing it with mineral oil.',

    facts: [
      { label: 'Type', value: 'Woodworking project' },
      { label: 'Technique', value: 'End-grain construction' },
      { label: 'Assembly', value: 'Individually cut blocks, glued by hand' },
      { label: 'Finish', value: 'Beveled edges, mineral oil' },
    ],

    sections: [
      {
        id: 'endgrain-overview',
        heading: 'Overview',
        image: { src: endgrainFinished, alt: 'The finished end-grain cutting board after oiling' },
        paragraphs: [
          "This project investigates the design and fabrication of an end-grain cutting board. I wanted to experiment with end-grain construction, which is more demanding to build than a conventional edge-grain board, and to see how far careful planning and finishing could take the result.",
          "The board combines two contrasting woods in a checkerboard-style pattern. It was built from individually cut blocks, joined in stages, flattened and shaped by hand, and finished with mineral oil.",
        ],
      },
      {
        id: 'endgrain-background',
        heading: 'Why End Grain?',
        paragraphs: [
          "In an end-grain board, the wood fibres run vertically, so the cutting surface is made of the cut ends of the grain. A knife edge can part the fibres rather than sever them across their length, which is why end-grain boards are traditionally valued for being gentler on knives and for their durable working surface.",
          "The same construction is also what makes them difficult to build. Each piece has to be cut accurately, aligned, and glued on its long-grain faces, because glue joints made on end grain are weak. A board is therefore a trade-off between appearance and function on one side and the time and precision required on the other.",
        ],
      },
      {
        id: 'endgrain-design',
        heading: 'Pattern Design',
        image: { src: endgrainLayout, alt: 'The blocks arranged in a dry layout, with some standing on edge to preview the pattern' },
        paragraphs: [
          "Before gluing anything, I cut the wood into blocks and arranged them on the bench to determine the pattern. Working with a dry layout meant I could compare arrangements of the two woods, check how the colours and grain balanced across the surface, and fix the order of the pieces while changes were still free.",
          "Standing some blocks on edge in the layout showed how the alternating end-grain and long-grain faces would read once the board was assembled, and it gave me a clear reference for the final order.",
        ],
      },
      {
        id: 'endgrain-fabrication',
        heading: 'Fabrication',
        image: { src: endgrainGlue, alt: 'The board clamped during the final glue-up, with glue squeezing out of the joints' },
        paragraphs: [
          "I approached the build in a fairly roundabout way. I started by cutting the wood into individual blocks, and only then realised that I would need to glue every one together by hand. This made the build far more time-consuming than my usual projects.",
          "The board was assembled in stages and clamped under pressure at each glue-up. The visible glue squeeze-out along the joints in the final glue-up is a useful check that the joints were fully wetted and under pressure.",
        ],
      },
      {
        id: 'endgrain-finishing',
        heading: 'Finishing',
        image: { src: endgrainPreOil, alt: 'The assembled board after sanding and before oiling' },
        paragraphs: [
          "After the glue-up, I sanded the surface smooth and flat, evened out the edges, and then beveled them to give the board a clean, modern look. Flattening is especially important on a board built from many separate pieces, since small differences in height between blocks show up as ridges on the surface.",
          "I finished the piece with mineral oil. The oil soaks into the wood, brings out the contrast between the two woods and helps protect the surface. The difference between the board before and after oiling is clear in the photographs.",
        ],
      },
      {
        id: 'endgrain-gallery',
        heading: 'The Build in Pictures',
        gallery: [
          { src: endgrainPattern, caption: 'Determining pattern' },
          { src: endgrainLayout, caption: 'Final layout' },
          { src: endgrainGlue, caption: 'Last glue-up' },
          { src: endgrainPreOil, caption: 'Pre-oil finished board' },
          { src: endgrainFinished, caption: 'Finished board' },
        ],
      },
      {
        id: 'endgrain-reflection',
        heading: 'Reflection',
        paragraphs: [
          "Despite the extra effort, the result was absolutely worth it. The finished board shows the two woods clearly and has a clean, even surface, and the process taught me how much of a woodworking project is decided before any glue is applied.",
          "The main trade-off was time. Cutting every block before gluing meant many separate pieces to align. A common alternative in end-grain work is to glue long strips first and then crosscut them into rows, which reduces the number of joints to line up, and that approach would be worth testing on a future board.",
        ],
      },
    ],

    technologies: ['Woodworking', 'End-grain construction', 'Pattern design', 'Glue-up and clamping', 'Sanding and flattening', 'Edge beveling', 'Mineral oil finishing'],
  },
  {
    id: 'mahogany-milking-stool',
    title: 'Mahogany Milking Stool',
    image: stoolFinal,
    imagePosition: 'center 25%',
    imagePortrait: true,
    shortDescription: 'A three-legged milking stool in reclaimed mahogany: my first lathe-turned legs, wedged joinery and piece of furniture.',
    tagline: 'My first piece of furniture: a three-legged stool with lathe-turned legs and wedged joints, built from mahogany I sourced myself.',

    facts: [
      { label: 'Type', value: 'Furniture / woodworking project' },
      { label: 'Material', value: 'Reclaimed mahogany' },
      { label: 'Techniques', value: 'Lathe turning, wedged joinery' },
      { label: 'Finish', value: 'Polyurethane' },
      { label: 'Experience', value: 'First time turning wood and making furniture' },
    ],

    sections: [
      {
        id: 'stool-overview',
        heading: 'Overview',
        image: { src: stoolFinal, alt: 'The finished mahogany milking stool with its polyurethane finish' },
        paragraphs: [
          "This project documents the design and construction of a three-legged milking stool in reclaimed mahogany. It was my first piece of furniture, and also my first experience of turning wood on a lathe.",
          "I sourced the wood myself from a local woodshop. From there I took the stool through every stage: gluing the seat blank, shaping the seat, turning the legs, joining the two, and finishing the whole piece.",
        ],
      },
      {
        id: 'stool-aims',
        heading: 'Aims',
        paragraphs: [
          "My goal was to gain confidence with the lathe and to explore joinery techniques that I had never used before. A stool is a good project for this because it is small and simple in form, but it depends on a few joints and on turned parts that must be consistent and well fitted.",
          "The three-legged design also suited the aim. A stool with three legs rests firmly on any surface, so the quality of the build shows in its proportions, balance and the fit of its joints rather than in added features. The project emphasised balance, clean lines and attention to detail.",
        ],
      },
      {
        id: 'stool-seat',
        heading: 'Preparing the Seat',
        image: { src: stoolRoughCut, alt: 'The rough-cut circular stool seat marked with layout lines on the workbench' },
        paragraphs: [
          "The seat was made from two mahogany pieces glued together to form a blank wide enough for the stool top. I then marked out a circle and cut the seat to a rough round shape, before shaping it further using a bandsaw.",
          "Choosing and preparing the material was part of the learning. Working with reclaimed mahogany meant adapting the design to the pieces available, and gluing two pieces together made it possible to get a seat of the size I wanted.",
        ],
      },
      {
        id: 'stool-turning',
        heading: 'Turning the Legs',
        image: { src: stoolLathe, alt: 'A stool leg being turned on the lathe' },
        paragraphs: [
          "I turned each leg on a lathe. This was my first time turning wood, so the legs were where most of my learning happened. Turning demands control of the tool and attention to the shape as it develops, and repeating the same profile across three legs made the need for consistency very clear.",
          "The finished legs carry a series of rings and curves, giving the stool a traditional character while keeping the three legs recognisably a set.",
        ],
      },
      {
        id: 'stool-joinery',
        heading: 'Joinery',
        image: { src: stoolJoined, alt: 'The three turned legs fitted into the underside of the stool seat' },
        paragraphs: [
          "I joined the legs to the seat with wedged joints, which I had never used before. I cut a slot into the top of each leg, applied wood glue, and drove a larger scrap wedge into the slot once the leg was in the seat.",
          "The wedge spreads the end of the leg inside the hole, so the joint is held by glue and by mechanical pressure at the same time. This locks the leg securely into place and helps the stool stay solid under load.",
        ],
      },
      {
        id: 'stool-finishing',
        heading: 'Finishing',
        image: { src: stoolDrying, alt: 'The stool drying after finishing, with the foam brush on the paper beside it' },
        paragraphs: [
          "I finished the stool with multiple coats of polyurethane for durability and sheen. A stool is used and moved often, so a hard-wearing finish matters, and the coats also bring out the colour and figure of the mahogany.",
        ],
      },
      {
        id: 'stool-gallery',
        heading: 'The Build in Pictures',
        gallery: [
          { src: stoolTopGlued, caption: 'Top of stool after gluing two mahogany chunks together' },
          { src: stoolRoughCut, caption: 'Rough cut of the top of the stool' },
          { src: stoolLathe, caption: 'Turning the legs on the lathe' },
          { src: stoolLegs, caption: 'Finished stool legs' },
          { src: stoolJoined, caption: 'Joined the legs to the stool using wood glue and small wedges in legs to secure the fit' },
          { src: stoolFinal, caption: 'Final product with poly finish' },
        ],
      },
      {
        id: 'stool-reflection',
        heading: 'Reflection',
        paragraphs: [
          "This stool was my first foray into furniture-making, and it served as valuable practice in both aesthetic design and precision craftsmanship. Learning to turn on the lathe and to cut and fit wedged joints gave me skills I had not used before and a good deal more confidence with the tools involved.",
          "Because I sourced the wood and carried the project through every stage myself, it also gave me a view of how a whole piece of furniture comes together, from raw material to finished object.",
        ],
      },
    ],

    technologies: ['Woodworking', 'Lathe turning', 'Wedged joinery', 'Bandsaw shaping', 'Wood gluing', 'Polyurethane finishing', 'Furniture design'],
  },
  {
    id: 'simon-says',
    title: 'Simon Says',
    image: simonPainted,
    imagePortrait: true,
    shortDescription: 'A memory game built on the Circuit Playground Express, with large external buttons and a custom-built, painted box.',
    tagline: 'A simplified version of the classic Simon Says game on the Circuit Playground Express, with a custom-built enclosure and wiring.',

    facts: [
      { label: 'Type', value: 'Group interactive design project' },
      { label: 'Platform', value: 'Circuit Playground Express' },
      { label: 'Input', value: 'Three large external buttons' },
      { label: 'Feedback', value: 'LED colours and sound' },
      { label: 'My role', value: 'Physical build and wiring' },
    ],

    sections: [
      {
        id: 'simon-overview',
        heading: 'Overview',
        image: { src: simonPainted, alt: 'The finished Simon Says game in its painted box, with the Circuit Playground Express lit up above three coloured buttons' },
        paragraphs: [
          "For this project we were asked to make a more complicated user-interactive design. My group built a game that emphasises active listening skills: a simplified version of the classic Simon Says, running on the Circuit Playground Express (CPX).",
          "The game challenges the user to remember and repeat a growing sequence of colours using three large external buttons. The project combined programming, electronics and woodworking, and it gave us experience in both hardware integration and user-focused design.",
        ],
      },
      {
        id: 'simon-concept',
        heading: 'Concept',
        paragraphs: [
          "Our aim was to design a fun, hands-on experience that asks the user to pay attention and respond. Simon Says suited this because the rules are familiar and can be learned instantly, while the sequence that grows each round keeps the challenge increasing.",
          "We chose to use physical buttons rather than the CPX's built-in inputs. Large, separate buttons are easier to press and make the game feel more tactile and more like a finished product than a circuit board on a desk.",
        ],
      },
      {
        id: 'simon-gameplay',
        heading: 'How the Game Works',
        paragraphs: [
          "The CPX randomly displays a colour and the user presses the button that matches it. With each correct input the sequence grows, first with one colour, then two, and finally three.",
        ],
        bullets: [
          'The CPX shows a colour, and the user presses the matching button.',
          'Each correct round adds another colour to the sequence, up to three.',
          'If the user repeats the full sequence correctly, the CPX lights up and plays a victory sound.',
          'If the user makes a mistake at any point, the CPX lights up red and plays a humorous "womp womp" sound to show that the game is lost.',
        ],
      },
      {
        id: 'simon-role',
        heading: 'My Role',
        paragraphs: [
          "My main role was the physical building and wiring. I worked out how the buttons connected to the CPX, wired them up, and built and finished the box that houses the game. My partner did the brunt of the coding, writing the game logic that controls the sequence, the lights and the sounds.",
          "Dividing the work this way meant the hardware and the software had to fit together precisely. The wiring had to be reliable and clearly organised so that the program could depend on every button press being read correctly.",
        ],
      },
      {
        id: 'simon-wiring',
        heading: 'Wiring and Prototyping',
        image: { src: simonWiring, alt: 'The three buttons and the Circuit Playground Express connected with loose wires on a workbench' },
        paragraphs: [
          "Before building the enclosure, I laid the circuit out on the workbench and tested it. The three buttons were connected to the CPX with wires and alligator clips, which made it easy to change connections while I worked out the wiring.",
          "Prototyping the circuit in the open allowed us to confirm that each button worked and that the CPX responded correctly before anything was fixed in place. It is much easier to correct a wiring mistake on an open table than inside a closed box.",
        ],
      },
      {
        id: 'simon-enclosure',
        heading: 'Enclosure and Cable Management',
        image: { src: simonSkeletonTop, alt: 'The top panel of the wooden box with the blue, green and red buttons mounted in it' },
        paragraphs: [
          "Once the circuitry and programming were finalised, we built a custom box to house the game. The three buttons were mounted in the top panel, and the CPX sits above the box on a back panel so that its lights can be seen as part of the game.",
          "We paid extra attention to cable management so that the final product looked clean and operated without interference from tangled wires. The wires were bundled and secured, and the box was then painted and decorated with a small image of Simon for fun.",
        ],
      },
      {
        id: 'simon-wiring-layout',
        heading: 'Final Wiring Layout',
        image: { src: simonFinalWiring, alt: 'The final wiring bundled and taped to the back panel of the painted box' },
        paragraphs: [
          "The final wiring layout shows the result of that effort. The wires are gathered into a single bundle and taped to the back panel, rather than hanging loose inside the box, so that they cannot catch or pull on the connections when the game is used.",
        ],
      },
      {
        id: 'simon-gallery',
        heading: 'The Build in Pictures',
        gallery: [
          { src: simonWiring, caption: 'Figuring out the wiring' },
          { src: simonSkeleton, caption: 'Finished skeleton' },
          { src: simonSkeletonTop, caption: 'Finished skeleton top view' },
          { src: simonFinalWiring, caption: 'Final wiring layout' },
          { src: simonPainted, caption: 'Finished and fully painted game' },
        ],
      },
      {
        id: 'simon-reflection',
        heading: 'Reflection',
        paragraphs: [
          "This project gave us hands-on experience with both hardware integration and user-focused design. Seeing the game work as a finished object, with its own box, buttons, lights and sounds, showed how much of a user's experience depends on the physical details as well as on the code.",
          "For me, it was also a lesson in how much work goes into making electronics look and feel finished. Careful wiring and cable management are largely invisible when they are done well, but they make the difference between a prototype and a product.",
        ],
      },
    ],

    technologies: ['Circuit Playground Express', 'Electronics and wiring', 'Alligator clip prototyping', 'Cable management', 'Woodworking', 'Painting and finishing', 'Interaction design'],
  },
];
