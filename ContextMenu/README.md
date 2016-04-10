# Angular Based Context Menu

Is was several day ago around 6 April 2016, that i come across this component: https://github.com/Templarian/ui.bootstrap.contextMenu .
At first it was too good. but after my work started and i got involved with complicated matters, it show the dark side of it self.
it had several bugs, and it's HTML wasn't the one to fulfill my needs, it closed on click, and it's event had more priority than angular, so i couldn't add complex feaute into it.

today i finished my work with that. but i said let for next time have better things to do.

So i come up with a plan on a paper. and then start to write some basic (somehow it was complicated too) codes. 
The things that i come up as a result with, were much more complicated than what i though but at last it's fully angular, and you can run your own event and stop angular ones...

But there are still issues, and i didn't handle dialog closing, at this stage.

I really look for a help in this part, who can dig in.


Module name: 'dmComponents'

Styles: <link rel="stylesheet" href="/App/directives/ctx-menu-directive.css" type="text/css"/>

simple sample (as i said the code are not complete and still needs modification):

```HTML
    <div>
    <button context-menu-handler="" data-ng-model="ctxDisplay">Display</button>

    <div context-menu-structure data-ng-model="ctxDisplay">
        <div context-menu-item-container="">
            <div context-menu-item="">Item 1</div>
        </div>
        <div context-menu-divider=""></div>
        <div context-menu-item-container="">
            <div context-menu-item="">Item 2</div>
        </div>
        <div context-menu-item-container="">
            <div context-menu-item="">Item 3</div>
            <div context-menu-nested="">
                <div context-menu-item-container="">
                    <div context-menu-item="">Item Nest 1</div>
                </div>
                <div context-menu-item-container="">
                    <div context-menu-item="">Item Nest 2</div>
                    <div context-menu-nested="">
                        <div context-menu-item-container="">
                            <div context-menu-item="">Item Nest Nest 1</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    ```
