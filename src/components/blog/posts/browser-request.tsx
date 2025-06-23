export const browserRequestContent = `<p>
        I am sure you have wondered what happens behind the scenes when you request for a website on your browser. As you might have imagined, theres a lot that goes on between the time you hit “Enter” on your keyboard, and when the webpage appears in your browser. For sure, a lot more than you think goes on between that timeframe but thanks to the insane speed of communications between computers today, it all happens in fractions of a second.
     </p>
     <p>Before we get to the main processes, it is important we discuss some terms which we would be making use of.</p>
     <ul class="custom-list">
    <li
      id="7a25"
      data-selectable-paragraph=""
    >
      <strong class="">IP address:</strong> An IP address is the actual
      address of a server over a network. Every computer, phone, router
      connected to a network has a unique ip address. An example of an IP
      address is 127.0.0.1.
    </li>
    <li
      id="44e6"
      class=""
      data-selectable-paragraph=""
    >
      <strong class="">URL:</strong> I am pretty sure you have heard the
      term <strong class="">url</strong>. The Uniform Resource Locator is
      an address to reach a resource on the internet. You can think of a url as
      the human friendly address to reach a resource on the internet. A resource
      can be a file or a web page or any piece of data or information that is
      available on another computer/server over the internet. A part of the url
      is resolved to an IP address. An example of a url would be
      “https//:www.google.com”.
    </li>
    <li
      id="7ec1"
      class=""
      data-selectable-paragraph=""
    >
      <strong class="">Internet Protocol:</strong> The internet protocol is
      a part of a url that specifies what internet protocol/rules would be used
      to communicate with any server over a network in our case, google’s
      servers. An example would be http or https.
    </li>
    <li
      id="3f0e"
      class=""
      data-selectable-paragraph=""
    >
      <strong class="">Domain name:</strong> The domain name is the human
      friendly name that is mapped to a computer’s/server’s IP address. When a
      domain name such as google.com is searched in your browser, the domain
      name is resolved to the IP address by a series of processes which would be
      discussed later in this post.
    </li>
    <li
      id="d888"
      class=""
      data-selectable-paragraph=""
    >
      <strong class="">Top Level Domain:</strong> TLD is usually the
      rightmost part of a domain name in this example “.com” is the TLD.
      Although .com is the most popular, we have other TLDs .edu, .tech, .dev
      and the list goes on and on.
    </li>
    <li
      id="0f5d"
      class=""
      data-selectable-paragraph=""
    >
      <strong class="">Sub domain:</strong> A subdomain is a domain name
      that points to another section that relates to the website. An example is
      the support for google’s website “
      <a
        class="ag mj"
        href="http://support.google.com"
        rel="noopener ugc nofollow"
        target="_blank"
      >
        support.google.com
      </a>
      ” which directs you to google’s support page.
    </li>
    <li
      id="168c"
      class=""
      data-selectable-paragraph=""
    >
      <strong class="">Cache memory:</strong> This is a special memory used
      by a software to store data that is usually made use of frequently.
    </li>
    <li
      id="e266"
      class=""
      data-selectable-paragraph=""
    >
      <strong class="">Query:</strong> As the name implies, the term is
      used when a request is made which requires a response.
    </li>
    <li
      id="1c9f"
      class=""
      data-selectable-paragraph=""
    >
      <strong class="">Server:</strong> This term is usually used to
      describe another computer somewhere on the internet.
    </li>
    <li
      id="3fdf"
      class=""
      data-selectable-paragraph=""
    >
      <strong class="">Load balancer:</strong> I think we can agree that
      one server/computer cannot serve the millions of requests made to google
      per time. As a matter of fact, Google has hundreds of thousands of servers
      all over the world to serve this purpose. Now how do you know what server
      to connect to you might ask. This is where a load balancer comes in. A
      load balancer is basically a server that has a software installed on it
      with the main purpose to distribute requests made to google. When you make
      a request to google, your request first hits a load balancer and then
      depending on the load distribution algorithm, your request is sent to a
      web or application server to serve your request. A distribution algorithm
      is a predefined systematic way of distributing web traffic to different
      servers. A popular load balancer is HAproxy.
    </li>
    <li
      id="a1c5"
      class=""
      data-selectable-paragraph=""
    >
      <strong class="">Web server:</strong> A web server is a software
      installed on a server/computer whose primary purpose is to serve static
      content over the web. A web server is responsible for sending a webpage in
      the form of a html script.
    </li>
    <li
      id="5268"
      class=""
      data-selectable-paragraph=""
    >
      <strong class="">Application server:</strong> An application server
      is a server/computer which is used primarily for applying a business logic
      to a request. When you search for something on google.com, your request is
      processed by an application server which has the right search algorithm to
      respond to your request. Of course you can’t talk of an application server
      without making mention of a database whose purpose is to store relevant
      data in a convenient and easily accessible way.
    </li>
    <li
      id="3f2d"
      class=""
      data-selectable-paragraph=""
    >
      <strong class="">SSL: </strong>Secure Socket Layer is a technology
      used to establish a secure connection between a client (your computer) and
      a server. To establish a secure connection between your computer and the
      server, Firstly your request gets to the server, and the server in turn
      sends an SSL certificate along with a public key. Your browser confirms
      the validity of the certificate and if it is valid, your browser encrypts
      every data sent using that public key. The only way to decrypt that
      message after encryption is by the use of a private key that is present
      only on the server. Now even if a hacker intercepts your message, he is
      unable to understand or decrypt it since he doesn’t have the private key.
      This process is done only once during a session. However, if you get
      disconnected, the process is repeated.
    </li>
    <li
      id="171f"
      class=""
      data-selectable-paragraph=""
    >
      <strong class="">SSL termination:</strong> The term SSL termination
      is used to describe the point at which data is decrypted. This can happen
      at the load balancer or the web/application server depending on the
      infrastructure design.
    </li>
    <li
      id="ded3"
      class=""
      data-selectable-paragraph=""
    >
      <strong class="">Ports: </strong>As the name implies a port is an
      entry point into your computer for connections. Computers have several
      ports and a few have been configured for special purposes. Port 22 is used
      for ssh connections, port 80 is default for http connections and port 443
      is default for https conections.
    </li>
  </ul>

  <p>
    Now that we have understood the basic terms, it’s time to take a dive into
    the working details of each step taken to get google’s webpage on your
    browser.
  </p>

<p
    
    data-selectable-paragraph=""
  >
    <span class="inline-title">1.</span>
    <strong class="">The DNS request: </strong>DNS is an abbreviation for
    Domain Name System. The domain naming system is responsible for resolving a
    domain name to a an IP address. For more context, it resolves “google.com”
    to the IP address of google’s servers. In a lot of cases, Domain name points
    directly to a load balancer which then distributes the requests to the
    web/application servers. There are several steps the browser takes in order
    to get the appropriate IP address.
  </p>

      <ul class="custom-list nest-1">
    <li class="" data-selectable-paragraph="">
      <strong class="">Browser cache memory:</strong> The browser first checks
      its cache memory for the requested domain name. If the site has been
      visited recently by your web browser, it is most likely the case that your
      browser has the IP address of the domain name (google.com) in its cache
      memory. This allows for greater speeds when browsing the internet.
    </li>
    <li class="" data-selectable-paragraph="">
      <strong class="">Operating System:</strong> If the browser doesn’t find
      the IP address for the domain name in the cache memory, it goes ahead to
      request the IP address from the Operating System of your computer. The
      computer then checks it’s cache memory for the IP address. If the IP
      address is found in the cache of the OS, the OS returns the IP address to
      the browser otherwise a request is made to a resolver.
    </li>
    <li class="" data-selectable-paragraph="">
      <strong class="">Resolver: </strong>The resolver is usually you Internet
      Service Provider (ISP). The resolver checks it’s cache memory first and
      returns the IP address if it is found. If the IP address is not found, the
      resolver forwards the request to the root server. The resolver always has
      the IP address of the root server.
    </li>
    <li class="" data-selectable-paragraph="">
      <strong class="">Root Server:</strong> Again, the root server checks its
      cache memory for the IP address and if it is found the IP address is
      returned to the resolver. If it is not found, it stores the information
      first and then ask’s the Top Level Domain (TLD) server. In this case the
      “.com” server.
    </li>
    <li class="" data-selectable-paragraph="">
      <strong class="">Top Level Domain server:</strong> The domain name always
      have relevant information because when a domain name is purchased by a
      company, it is registered with the TLD registrar and the TLD communicates
      with the Authoritative name servers (ANS). The domain name is searched and
      all corresponding authoritative name servers are returned to the resolver.
      The resolver then makes a request to any of the ANS and the ip address for
      that request is provided.
    </li>
  </ul>

  <p class="">
    The resolver the returns the IP to the OS and the OS saves the information
    in it’s cache memory. And finally, the IP address is communicated to the
    browser.
  </p>

  <img src="/public/dns-req.webp" />
  <p class="image-label">fig 1.0</p>

  <p class="">
    This completes the first of other steps taken to complete the request you
    made from your browser. Next we are going to talk about the communication
    protocols used between computers over a network (internet).
  </p>

  <p class="">
    <span class="inline-title">2.</span>
    <strong class=""> TCP/IP:</strong> Transmission Control Protocol (TCP) /
    Internet Protocols are a set of specified rules/protocols which computers
    use to communicate with one another over a network. For the sake of this
    context we would be focusing on two of the most widely used protocols over
    the internet.
  </p>

  <ul class="nest-1">
    <li class="custom-list">
      HTTP: The Hyper Text Transfer Protocol (HTTP) is very instrumental in the
      communication of computers over the web. The flow is that a http request
      is made to a server and a response is generated by the server to serve
      that request. A server is configured by default to listen for HTTP
      requests on port 80. A HTTP request usually comprises of some information
      which are;
    </li>
    <ul class="sublist nest-2">
      <li>The http version type.</li>
      <li>The url to request from.</li>
      <li>
        The http method. This refers to an action that is required by the
        queried server. Majorly we have the POST and GET methods (POST requests
        to send data to a server), (GET requests to receive data from a server).
        Other methods include PUT, DELETE, OPTIONS, TRACE e.t.c.
      </li>
      <li>
        The http request header. Contains relevant information relating to that
        request.
      </li>
      <li>The http request body (optional).</li>
    </ul>
  </ul>

  <ul class="">
    <li class="custom-list">
      HTTPS: The Hyper Text Transfer Protocol Secure (HTTPS) is the secure
      version of the HTTP protocol and it’s purpose is to secure/encrypt data
      that is transferred between your computer and the server being
      communicated with. To have a secure connection between your computer and
      the server of another website, a Secure Socket Layer (SSL) certificate is
      required by the server. A server is configured by default to listen for
      HTTPS requests on port 443.
    </li>
  </ul>

  <p class="">
    <span class="inline-title">3.</span>
    <strong class=""> Firewall:</strong> A firewall is put in place by the
    server being requested and its purpose is to monitor every incoming and
    outgoing traffic and filters out unwanted/unauthorised traffic from getting
    into the server. An example of an unwanted traffic would be a hacker who is
    trying to access information from a database of a company. The firewall
    filters out such requests and prevents relevant information from getting
    into the wrong hands. The firewall could be on the load balancer, the
    web/application servers or on both.
  </p>

  <p class="">
    <span class="inline-title">4.</span>
    <strong class=""> Load balancer:</strong> A load balancer may or may not be
    included in the chain of events depending on the load of traffic on a site.
    A load balancer is used for distributing requests between web/application
    servers for better speeds and efficiency. The distribution algorithm
    determines how requests are distributed between the other servers. An
    example of a distribution algorithm is the round robin algorithm which
    basically sends requests to the servers turn by turn (assuming there are
    three servers, 1 , 2, 3, 1, 2, 3…).
  </p>

  <p class="">
    <span class="inline-title">5.</span>
    <strong class=""> Web/Application server:</strong> We have seen earlier the
    functions of both a web and application server. The traffic is received from
    a load balancer and depending on the request method, the web/application
    sends a response back to your web browser. In most cases, an application
    server works with a database where relevant information is stored e.g your
    login credentials to verify your identity.
  </p>

  <p class="">
    <span class="inline-title">6.</span>
    <strong class=""> Response:</strong> Depending on the type of request, a
    corresponding response is generated by the server and that response is sent
    back to your computer. Your browser renders the response gotten on your
    screen and the process ends.
  </p>

  <img src="/public/dns-resolution.webp" />
  <p class="image-label">fig 1.1</p>

  <p class="">
    Note here that the request is directed to the IP address associated with the domain name. Refer to fig 1.1 for domain name resolution.
  </p>
     `;
