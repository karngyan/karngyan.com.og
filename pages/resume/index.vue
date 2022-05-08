<template>
  <div class="max-w-7xl px-4 mx-auto pt-2 border-l border-r border-dashed border-gray-700">
    <div class="max-w-5xl mx-auto">
      <div class="relative h-48 border-t border-dashed border-gray-700 shadow-inner flex items-center justify-center">
        <Peaberry class="h-8" />
        <a target="_blank" rel="noreferrer" :href="pdfUrl" class="mb-2 absolute bottom-0 right-0 inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-transparent focus:ring-hot-pink">
          pdf
          <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 -mr-0.5 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>

      <div class="relative border-t border-gray-700 border-dashed">
        <div class="-mt-24 z-40 cursor-pointer hover: image-profile h-32 w-32 overflow-hidden rounded-full shadow-md border-4 border-gray-700">
          <img src="https://cdn.karngyan.com/karn.jpg" alt="karn"/>
        </div>

        <div class="grid grid-cols-3 gap-4">
          <div class="col-span-3 md:col-span-2">
            <div class="pt-2 text-2xl font-semibold text-gray-200">{{ resume.name }}</div>
            <div class="text-gray-300 text-md pt-1 lowercase">{{ resume.bio }}</div>
            <p class="text-sm text-gray-500">Bengaluru, Karnataka, India • mail@karngyan.com</p>
          </div>
          <div class="hidden md:block">
            <div class="space-x-2 flex flex-row items-start">
              <img src="../../assets/bitm.webp" alt="BIT Mesra" class="h-5 mt-0.5 mr-0.5"/>
              <a href="#education" class="text-md lowercase font-medium text-gray-200 hover:underline hover:text-gray-100">Birla Institute of Technology, Mesra</a>
            </div>
          </div>
        </div>

        <div class="border-t border-dashed border-gray-700 my-4"></div>

        <div>
          <div class="pt-2 text-2xl font-semibold text-gray-200">experience</div>

          <div class="mt-6 flex flex-row space-x-4">
            <div class="h-10 w-10 flex items-center justify-center rounded-sm border-gray-700 border-dashed">
              <PeaberrySmall class="h-10 w-10" />
            </div>
            <div class="flex flex-col space-y-1">
              <h4 class="text-md font-semibold leading-5 text-gray-200">software engineer 2</h4>
              <p class="text-sm text-gray-300 font-normal"><a class="hover:text-gray-200" target="_blank" rel="noreferrer" href="https://customer.io">customer.io</a> • full-time</p>
              <p class="text-sm text-gray-400 font-normal">22 March, 2022 - Present • {{ formatWorkedDuration(2022, 3, 22) }}</p>
              <div class="text-sm text-gray-300 font-normal mt-2">
                <div>Team: Mobile Squad</div>
                <div> • Enhanced segment js source integration to include SMS, Push, Webhook, Slack along with Email events.</div>
                <div> • Our team works towards building and maintaining Cio's Mobile SDK and features around SMS and Push notifications.</div>
              </div>
            </div>
          </div>

          <div class="mt-6 flex flex-row space-x-4">
            <div class="h-10 w-10 flex items-center justify-center rounded-sm border-gray-700 border-dashed">
              <SendXSmall class="h-10 w-10" />
            </div>
            <div class="flex flex-col space-y-4">
              <div class="flex flex-col space-y-1">
                <h4 class="text-md font-semibold leading-5 text-gray-200">software engineer</h4>
                <p class="text-sm text-gray-300 font-normal"><a class="hover:text-gray-200" target="_blank" rel="noreferrer" href="https://sendworks.io">sendx.io</a> • full-time</p>
                <p class="text-sm text-gray-400 font-normal">27 July, 2021 - 21 March, 2022 • {{ formatWorkedDuration(2021, 7, 27, 2022, 3, 21) }}</p>
                <div class="text-sm text-gray-300 font-normal mt-2">
                  <div>Team: Product & Tech</div>
                  <div> • Built SendHealth by SendX, from PRD to production: sendhealth.io (Nuxt + Go)</div>
                  <div> • Built SMTP Relay Infra for SendPost in Go, with Postgres Authentication and TLS Support over ports (587, 25, 2525) and SSL Support on (port 465)</div>
                  <div> • Automated Generation and Renewal of TLS Certificates for wildcard domains using DNS Validation.</div>
                  <div> • Wrote bash scripts to automate Embedded DB Truncation to optimize on storage.</div>
                  <div> • Added cc/bcc and attachments support to Send Email API of SendPost.</div>
                </div>
              </div>

              <div class="flex flex-col space-y-1">
                <h4 class="text-md font-semibold leading-5 text-gray-200">software engineer intern</h4>
                <p class="text-sm text-gray-300 font-normal"><a class="hover:text-gray-200" target="_blank" rel="noreferrer" href="https://sendworks.io">sendx.io</a> • full-time</p>
                <p class="text-sm text-gray-400 font-normal">26 July, 2020 - 15 Jan, 2021 • {{ formatWorkedDuration(2020, 7, 26, 2021, 1, 15) }}</p>
                <div class="text-sm text-gray-300 font-normal mt-2">
                  <div>Team: Product & Tech</div>
                  <div> • Implemented the Integration layer, starting with Glockapps in order to enhance the data already present on the platform.</div>
                  <div> • Added a feature to allow users to send mock emails and test out the platform. Added infra for domain and member email verification using JWT.</div>
                  <div> • Implemented the Incident Management CRM, which allows users to resolve and discuss Incidents relating to IPs, and SubAccounts.</div>
                  <div> • Implemented the onboarding checklist, the front and the APIs.</div>
                  <div> • Once the MVP was built, worked on frameworks like BullsEye, and AARRR to understand the funnel of customer impact and figure out items to work on in the next product cycle.</div>
                  <div> • Frameworks/Tools: Beego, NSQ, VueJs(2), Ansible, Openresty, Figma</div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 flex flex-row space-x-4">
            <div class="h-10 w-10 p-1 flex items-center justify-center rounded-sm border-gray-700 border-dashed">
              <AmazonSmall class="h-10 w-10" />
            </div>
            <div class="flex flex-col space-y-4">
              <div class="flex flex-col space-y-1">
                <h4 class="text-md font-semibold leading-5 text-gray-200">software dev engineer intern</h4>
                <p class="text-sm text-gray-300 font-normal"><a class="hover:text-gray-200" target="_blank" rel="noreferrer" href="https://amazon.com">amazon.com</a> • full-time</p>
                <p class="text-sm text-gray-400 font-normal">16 Jan, 2021 - 26 July, 2021 • {{ formatWorkedDuration(2021, 1, 16, 2021, 7, 26) }}</p>
                <div class="text-sm text-gray-300 font-normal mt-2">
                  <div>Team: IN Payments Use Cases - Tech</div>
                  <div> • Migrated FASTag recharge page from webview to React Native and implemented a few new APIs required for the migration.</div>
                  <div> • Added a Send to Self feature on Send Money Page.</div>
                </div>
              </div>

              <div class="flex flex-col space-y-1">
                <h4 class="text-md font-semibold leading-5 text-gray-200">software dev engineer - summer intern</h4>
                <p class="text-sm text-gray-300 font-normal"><a class="hover:text-gray-200" target="_blank" rel="noreferrer" href="https://amazon.com">amazon.com</a> • full-time</p>
                <p class="text-sm text-gray-400 font-normal">4 May, 2020 - 26 June, 2020 • {{ formatWorkedDuration(2020, 5, 4, 2020, 6, 26) }}</p>
                <div class="text-sm text-gray-300 font-normal mt-2">
                  <div>Team: IN Payments Use Cases - Tech</div>
                  <div> • Implemented a modular React Native(Expo/TypeScript) Frontend utilizing AsyncStorage on iOS and Android Platform.</div>
                  <div> • Enhanced the search functionality by implementing a custom Trie from scratch.</div>
                  <div> • Implemented a backend service for the same using Spring Boot and AWS DynamoDB</div>
                  <div> • Finished my project 2 weeks before the last date of my internship.</div>
                  <div> • Acquired a Pre Placement Offer.</div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 flex flex-row space-x-4">
            <div class="h-10 w-10 flex items-center justify-center rounded-sm border-gray-700 border-dashed">
              <CrioDoSmall class="h-10 w-10" />
            </div>
            <div class="flex flex-col space-y-4">
              <div class="flex flex-col space-y-1">
                <h4 class="text-md font-semibold leading-5 text-gray-200">software engineer intern</h4>
                <p class="text-sm text-gray-300 font-normal"><a class="hover:text-gray-200" target="_blank" rel="noreferrer" href="https://crio.do">crio.do</a> • full-time</p>
                <p class="text-sm text-gray-400 font-normal">22 Oct, 2019 - 30 April, 2020 • {{ formatWorkedDuration(2019, 10, 22, 2020, 4, 30) }}</p>
                <div class="text-sm text-gray-300 font-normal mt-2">
                  <div>Team: Backend & Infra</div>
                  <div> • Implemented RESTful CRUD API endpoints for AWS EBS Volume for Students’ Workspace on the platform using Spring Boot and AWS Lambda.</div>
                  <div> • Built and deployed workspace infrastructure utilizing Docker container, and several AWS stack(Including EC2, EKS, S3, Cloud Formation, IAM, ELB), focusing on high-availability, fault tolerance, and auto-scaling of EKS Cluster</div>
                  <div> • Automated start-up tasks for user container and EC2 machines using Ansible.</div>
                  <div> • Researched on a common storage solution for User’s on GCP and AWS, ended up utilizing AWS EFS.</div>
                  <div> • Enhanced User Purge Jenkins Job Build Time by almost 1500% on Day 1.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="border-t border-dashed border-gray-700 my-4" />

        <div>
          <div class="pt-2 text-2xl font-semibold text-gray-200">education</div>
          <div class="mt-6 flex flex-row space-x-4">
            <div class="h-10 w-10 flex items-center justify-center rounded-sm border-gray-700 border-dashed">
              <img class="h-10 w-10" src="../../assets/bitm.webp" alt="BIT Mesra" />
            </div>
            <div class="flex flex-col space-y-4">
              <div id="education" class="flex flex-col space-y-1">
                <h4 class="text-md font-semibold leading-5 text-gray-200"><a class="hover:text-gray-200" target="_blank" rel="noreferrer" href="https://bitmesra.ac.in">birla institute of technology, mesra</a></h4>
                <p class="text-sm text-gray-300 font-normal">Bachelor of Engineering • Information Technology</p>
                <p class="text-sm text-gray-400 font-normal">27 July, 2017 - 30 June, 2021 • {{ formatWorkedDuration(2017, 7, 27, 2021, 5, 30) }}</p>
                <div class="text-sm text-gray-300 font-normal mt-2">
                  <div>Grade: 7.75/10 (First class with Distinction)</div>
                  <div>Activities and societies:</div>
                  <div> • President at IET on Campus.</div>
                  <div> • Director at IEEE Student Branch.</div>
                  <div>IET on Campus, BIT Mesra</div>
                  <div> • Problem Setter for Capture The Flag Event.</div>
                  <div> • Conducted Workshops on Python, C/C++ all through the academic year</div>
                  <div> • President: July 2020 - June 2021</div>
                  <div> • General Secretary: May 2019 – June 2020</div>
                  <div> • Member: Aug 2018 – Apr 2019</div>
                  <div>IEEE Student Branch, BIT Mesra</div>
                  <div> • Organized CICADA(Online CTF + Offline Treasure Hunt) during Pantheon (Technical Fest at BIT Mesra)</div>
                  <div> • Organized Data Structures and Algorithms Workshop.</div>
                  <div> • Director: July 2020 - June 2021</div>
                  <div> • Technical Head: May 2019 – June 2020</div>
                  <div> • Member: Aug 2018 – Apr 2019</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="border-t border-dashed border-gray-700 my-4" />

        <div>
          <div class="pt-2 text-2xl font-semibold text-gray-200">licenses & certifications</div>
          <div class="mt-6 flex flex-row space-x-4">
            <div class="h-10 w-10 flex items-center justify-center rounded-sm border-gray-700 border-dashed">
              <img class="h-10 w-10" src="../../assets/icpc.png" alt="ICPC" />
            </div>
            <div class="flex flex-col space-y-4">
              <div id="education" class="flex flex-col space-y-1">
                <h4 class="text-md font-semibold leading-5 text-gray-200">icpc</h4>
                <p class="text-sm text-gray-300 font-normal">ICPC • International Collegiate Programming Contest</p>
                <p class="text-sm text-gray-400 font-normal">Issued Jan 2018 • No Expiration Date</p>
                <div class="text-sm text-gray-300 font-normal mt-2">
                  <a target="_blank" rel="noreferrer" href="https://icpc.global/ICPCID/3OPB8UMQIVWU" class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    show credential
                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 -mr-0.5 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 flex flex-row space-x-4">
            <div class="h-10 w-10 flex items-center justify-center rounded-sm border-gray-700 border-dashed">
              <AWS class="w-10" />
            </div>
            <div class="flex flex-col space-y-4">
              <div id="education" class="flex flex-col space-y-1">
                <h4 class="text-md font-semibold leading-5 text-gray-200">aws certified developer - associate</h4>
                <p class="text-sm text-gray-300 font-normal">Amazon Web Services (AWS)</p>
                <p class="text-sm text-gray-400 font-normal">Issued Aug 2021 • Expires Aug 2024</p>
                <div class="text-sm text-gray-300 font-normal mt-2">
                  <a target="_blank" rel="noreferrer" href="https://www.credly.com/badges/56010a2a-c045-411a-ae2e-f3cb964bf2a0" class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    show credential
                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 -mr-0.5 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="border-t border-dashed border-gray-700 mt-16" />
  </div>
</template>

<script>
import {formatDistance} from "date-fns";

export default {
  head() {
    return {
      title: 'resume -- Karn | Friendly Neighborhood Developer'
    }
  },
  computed: {
    pdfUrl() {
      return this.$store.state.resume.pdfUrl
    },
    pdfUrlDark() {
      return this.$store.state.resume.pdfUrlDark
    }
  },
  methods: {
    formatWorkedDuration(startYear, startMonth, startDay,
                         endYear = 0, endMonth = 0,
                         endDay = 0) {
      let from = new Date(startYear, startMonth - 1, startDay)
      let to = new Date(endYear, endMonth - 1, endDay);
      if (endYear === endMonth) to = new Date()
      return formatDistance(from, to)
    }
  },
  data() {
    return {
      resume: {
        name: 'Gyan Prakash Karn 💻',
        bio: 'Software Engineer 2 at Customer.io / AWS Certified Dev Associate / BIT Mesra Alum',

      }
    }
  }
}
</script>

<style scoped>

</style>
