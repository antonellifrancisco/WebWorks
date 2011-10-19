/*
* Copyright 2010-2011 Research In Motion Limited.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
package blackberry.app;

import blackberry.core.ScriptableFunctionBase;
import net.rim.device.api.system.Application;

/**
 * Implements blackberry.app.requestBackground function
 */
public final class RequestBackgroundFunction extends ScriptableFunctionBase {

    public static final String NAME = "requestBackground";

    /**
     * @see ScriptableFunctionBase#execute(Object, Object[])
     */
    public Object execute( Object thiz, Object[] args ) {
        Application app = Application.getApplication();
        app.requestBackground();
        return UNDEFINED;
    }
}
