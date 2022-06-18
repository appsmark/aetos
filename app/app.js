import { Application } from "@nativescript/core";

Application.on(Application.launchEvent, (args) => {
    if (args.android) {
        // For Android applications, args.android is an android.content.Intent class.
        console.log("Launched Android application with the following intent: " + args.android + ".");
    } else if (args.ios !== undefined) {
        // For iOS applications, args.ios is NSDictionary (launchOptions).
        console.log("Launched iOS application with options: " + args.ios);
    }
});

Application.on(Application.suspendEvent, (args) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity suspend: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios); 
    }
});

Application.on(Application.resumeEvent, (args) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity resume: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

Application.on(Application.displayedEvent, (args) => {
    // args is of type ApplicationEventData
    console.log("displayedEvent");
});

Application.on(Application.orientationChangedEvent, (args) => {
    // args is of type OrientationChangedEventData
    console.log(args.newValue); // "portrait", "landscape", "unknown"
});


Application.on(Application.exitEvent, (args) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity exit: " + args.android);
        if (args.android.isFinishing()) {
            console.log("Activity exiting: " + args.android);
        } else {
            console.log("Activity restarting: " + args.android);
        }
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

Application.on(Application.lowMemoryEvent, (args) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity low memory: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

Application.on(Application.uncaughtErrorEvent, (args) => {
    console.log("Error: " + args.error);
});

Application.run({ moduleName: "app-root" });