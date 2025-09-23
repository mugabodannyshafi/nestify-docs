import { Scale } from "lucide-react";

export default function License() {
  return (
    <div className="docs-content">
      <h1 className="text-4xl font-bold tracking-tight mb-4 flex items-center">
        <Scale className="w-8 h-8 mr-3" />
        License
      </h1>
      <p className="text-xl text-muted-foreground mb-8">
        Nestify is released under the MIT License, giving you the freedom to use, modify, and distribute the software.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">MIT License</h2>
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="mb-4">Copyright (c) 2024 Shafi Danny MUGABO</p>
          
          <p className="mb-4">
            Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:
          </p>
          
          <p className="mb-4">
            The above copyright notice and this permission notice shall be included in all
            copies or substantial portions of the Software.
          </p>
          
          <p className="font-semibold">
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What This Means</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="docs-feature-item">
            <h3 className="font-semibold mb-2 text-green-600">You Can</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Use Nestify for any purpose</li>
              <li>Modify and distribute it</li>
              <li>Use it in commercial projects</li>
              <li>Create derivative works</li>
            </ul>
          </div>
          
          <div className="docs-feature-item">
            <h3 className="font-semibold mb-2">You Must</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Include the license notice</li>
              <li>Include the copyright notice</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-8">
        <h2 className="text-2xl font-semibold mb-4">Third-Party Licenses</h2>
        <p className="mb-4">
          Nestify depends on various open-source packages, each with their own licenses. 
          Please review the licenses of any dependencies in your generated projects.
        </p>
      </div>
    </div>
  );
}