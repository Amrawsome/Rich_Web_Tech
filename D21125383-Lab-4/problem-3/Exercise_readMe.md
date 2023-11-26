Exercises 

Question: Explain what is meant by the stream abstraction. What is the relationship between streams and the observer pattern?  What are streams useful for modelling and when might you use them in Rich Web development?

1.	Stream abstraction is any source of input or destination output events. Some examples of Inputs are mouse or keyboard, and examples of outputs are Screen or audio. It allows you to do read and write operations on files. 
The relationship between streams and the observer pattern is that both are used to get data and have consumers and producers. Collections that arrive over time are streams they handle a single event, where observers use observables which work with multiple values asynchronously. Streams are pulling based meaning the data consumer gets the data from the producer when it chooses whereas observables are push based and the producer decides when the consumer gets the data. I conclusion the relationship is based on data transfer but handle if differently.
Streams are useful in modelling if we have the problem of trying to access data that can live in a few remote locations. We might use them in rich web development if we want to reduce a stream processing issue by using a merged set of one or more data streams for example mouse clicks, keyboard input and DOM state changes, all of these can be processed within the same logical structure using the same semantics.


Assume that you are building an interface to an API in your Rich Web App. Describe in detail how you could use the RxJS library to handle asynchronous network responses to API requests. In your opinion, what are the benefits to using a streams library for networking over, say, promises? And what do you think are the downsides?

2.	How you could use RxJS to handle asynchronous network responses to API requests is to first install RxJs on your system. After this you can use ajax functions to make HTTP requests. Next, you’re going to want to set up an Observable to handle the API’s asynchronous requests, subscribing to the observable will then initiate the request and react to incoming data. Next RxJS provides operators to transform or combine requests like filter or map. 

Pro:
Operators or transformation-
The operators that stream libraries provide prove to be a great tool to transform asynchronous data allowing the manipulation of data as it is being processed.

Resource Management-

Streams allowing things like the action to unsubscribe from an operation when it is ongoing. This helps to manage resources and avoid memory leaks.
	
 Con:
	Pickup Time-
 	What I mean by this is that is someone who is new to reactive programming might 
have a hard time learning streams compared to promises. This is because subscribing, and observables are complicated and can be hard to get your head around.

Overthinking/Overuse- 
Streams can be very useful for handling/ reading data but sometimes the simpler approach can be better. Promises in certain cases are more useful and, in that case, streams may just make the code more complex.


Consider three asynchronous tasks, A, B & C. What are the consequences of these functions sharing global state? What is a good practice to alleviate any problems associated with this?

3.	Consequences Of Sharing Global State:

Race Conditions-

In this case this refers to different tasks trying to access/ modify the state at the same time, so without proper execution ordering it can lead to problems in the state maybe data corruption etc. because of simultaneous access.
Debugging-
As the global state can be changed simultaneously essentially debugging can be a problem because its hard to read the system state/ what’s going on in the system.

Good Practices:

Encapsulation-

The use of encapsulation in this case is a good practice because instead of using the global state as a crutch. Allowing each task to use their own variables may stop actions that could be unpredictable with global use.
Observables-

Using observables can be a good practice when using global state as it allows for good management of asynchronous data streams in things like operators.  
