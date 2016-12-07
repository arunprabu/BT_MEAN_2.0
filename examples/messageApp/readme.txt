Step 1: Setup firebase
        Goto firebase.com and go to console.
        create a new project.
        then, in landing page sidebar, click on Database
        go to Rules tab, to change permissions to true and publish.
        and go to Data Tab
        click on the + and add a key, value pair
            message: "Hello"
Step 2: Create a component with a name 'mesaging'
Step 3: Now, > ng g s msg
        in the msg.service.ts file's constructor

        import {Http} from "@angular/http";
        constructor(private http: Http){ 
            //http is injected in constructor. to fully do it folow Step 4.
        }


Step 4: Go back to msg.service.ts file,
        add the following inside component class

        getMessage(){
           return this.http.get(http://firebase_url.com/message.json);
        }

        We should now call the service.
Step 5: In, messaging.component.ts,
        import { MsgService } from "./msg.service";
        
        constructor(private msgService: MsgService){

        }

        this component should implement OnInit.

        so, 
        export class MsgService implements OnInit {
        }
        now, 
        outside constructor, 
        ngOnInit(){
            this.msgService.getMessage() //this is to send req
                .subscribe(
                    (data: Response ) => console.log(data.json()); //import {Response } from "@angular/http";
                ) //subscribe is to listen to response                
        } 

        and finally,
        inside @component decorator,
        @component ({
            ...,
            ...,
            ...,
            providers: [MsgService]
        });
    
Step 6: in app.module.ts file,
            import {HttpModule} from "@angular/http";

            @NgModule({
                ...,
                imports: [.., HttpModule],
                ...,
                ...
            });

Step 7: Consume the <app-messaging> selector in app.component.html


