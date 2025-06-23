export const incidentReportBlog = `
  <img src="/public/incident-report.webp" />

  <div class="prose">
    <h2>Issue Summary</h2>
    <p>
      From April 26 2022 at (4:05 GMT+1) to April 27 2022 at (17:2022 GMT +1)
      requests to my student server returned 500 error messages. The error
      affected 100% of traffic to the server making no service on the website
      available. The root cause of this outage was a recent configuration file
      change that caused a bug in the web-server software.
    </p>
  </div>

   <div class="prose">
    <h2>Timelines (all times GMT+1)</h2>
    <ul class="custom-list nest-1">
      <li>
        <strong>April 26 2022 (4:05 AM):</strong> Alerted by Email. I recieved an email from the
        Alx team concerning the issue.
      </li>
      <li>
        <strong>April 27 2022 (3:27 PM):</strong> Debugging begins. Firstly the server was
        restarted but the issue persisted.
      </li>
      <li>
       <strong> April 27 2022 (3:42 PM):</strong> Server process was attached to{" "}
        <strong class="le fs">strace</strong> debugging tool to monitor each
        action taken by server software.
      </li>
      <li>
        <strong>April 27 2022 (4:16 PM):</strong> Issue detected. It was noticed that the
        software was trying to access some files that didn’t exist in the
        configuration files.
      </li>
      <li>
        <strong>April 27 2022 (4:34 PM):</strong> First change implemented. One of the files
        missing was created in the required path.
      </li>
      <li>
        <strong>April 27 2022 (4:50 PM):</strong> Failed service restore. The file created didn’t
        solve the issue.
      </li>
      <li>
        <strong>April 27 2022 (5:12 PM):</strong> Looking closer, a configuration file that the
        server software required already existed but was named wrongly.
      </li>
      <li>
        <strong>April 27 2022 (5:17 PM):</strong> Second change implemented. The filename was
        corrected using puppet.
      </li>
      <li>April 27 2022 (5:22 PM): Confirmed successful service restore.</li>
    </ul>
  </div>

  <div class="prose">
    <h2>Root cause and resolution</h2>
    <p>
      Usually at Alx school, we are given web stack debugging projects every
      once in a while to fix broken servers. In this particular scenario, the
      server returned a 500 (Internal server) error code. Taking a closer look
      into things it was realised that a configuration file name had been
      changed which caused the server software to malfunction.
    </p>
    <p>
      To resolve the issue Firstly the server was restarted to ensure it was
      running with proper configuration. Once the server was confirmed to be
      running, I went ahead to look at the error logs for Apache2 and nothing
      suspicious was found. Finally I resulted to the strace debugging tool.
      Strace is a tool that allows one to attach a running process to it and it
      monitors and logs all activities. After attaching the apache server
      process to strace, I made a HTTP request to the web-server and all the
      actions carried out to respond to the request were logged to a file.
      Looking at the logs, i noticed the server tried to access some files which
      didn’t exist. I created one file that was absent but this had no effect.
      Looking closer, a configuration file that the server software required
      already existed but had a wrong file extension. I went ahead to correct
      the file extension and this solved the problem.
    </p>
  </div>

  <div class="prose">
    <h2>Corrective and preventative measures</h2>
    <ul class="custom-list nest-1">
      <li>
        Make a comprehensive report on any changes made to ease debugging incase
        of an outage.
      </li>
      <li>
        Make changes in a testing environment before implementing in production.
      </li>
      <li>Have a monitoring agent in place to detect errors on time.</li>
    </ul>
  </div>
`;
