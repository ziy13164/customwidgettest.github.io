/** @jsx jsx */
/**
  Licensing

  Copyright 2022 Esri

  Licensed under the Apache License, Version 2.0 (the "License"); You
  may not use this file except in compliance with the License. You may
  obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
  implied. See the License for the specific language governing
  permissions and limitations under the License.

  A copy of the license is available in the repository's
  LICENSE file.
*/
import { React, jsx } from 'jimu-core'
const { useEffect, useRef } = React

export default function Widget () {
  // Create a React Ref - https://reactjs.org/docs/refs-and-the-dom.html
  const mainRef = useRef<HTMLDivElement>()

  useEffect(() => {
    import('./info.json').then(info => {
      const infoObj = info.default
      if (mainRef && mainRef.current) {
        for (const key in infoObj) {
          const label = document.createElement('p')
          label.innerHTML = `${key}: ${info[key]}`
          mainRef.current.appendChild(label)
        }
      }
    })
  }, [mainRef])

  return (
    <div className="widget-show-json-info jimu-widget p-2">
      <div ref={mainRef}></div>
    </div>
  )
}
