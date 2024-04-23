import React from 'react';
import { LivePortal } from '../components/LivePortal';

function MainPage() {

    return (
        <div className="h-screen">
            <div className={`grid grid-cols-5 h-screen w-full`}>
                <div className="col-span-3 bg-gray-200">
                    <div className="h-[70%] overflow-auto" style={{ scrollbarWidth: 'thin' }}>
                        <LivePortal />
                    </div>

                    <div className="h-[30%] bg-gray-400 flex">
                        <div className="w-[33.33%]  bg-gray-300 overflow-auto" style={{ scrollbarWidth: 'thin' }}>
                            <div className='p-5'>
                                <p className='font-bold'>
                                    Statements kinds
                                </p>

                                <ul className="list-disc ml-4">
                                    <li>Expression
                                        <ul className="list-disc ml-4">
                                            <li>Useless</li>
                                            <li>Useful</li>
                                        </ul>
                                    </li>
                                    <li>Declaration / assignment
                                        <ul className="list-disc ml-4">
                                            <li>Assign only</li>
                                            <li>Useful</li>
                                            <li>Declare & assign</li>
                                        </ul>
                                    </li>
                                    <li>Conditional
                                        <ul className="list-disc ml-4">
                                            <li>If</li>
                                            <li>Else</li>
                                            <li>Loop
                                                <ul className="list-disc ml-4">
                                                    <li>For</li>
                                                    <ul className="list-disc ml-4">
                                                        <li>3 Statements</li>
                                                        <li>For/in</li>
                                                        <li>For/of</li>
                                                    </ul>
                                                    <li>While
                                                        <ul className="list-disc ml-4">
                                                            <li>Do/while</li>
                                                            <li>While</li>
                                                        </ul>
                                                    </li>
                                                    <li>Function</li>
                                                    <ul className="list-disc ml-4">
                                                        <li>Declaration</li>
                                                        <li>Return</li>
                                                        <li>Throw</li>
                                                    </ul>
                                                    <li>Try/catch</li>
                                                    <ul className="list-disc ml-4">
                                                        <li>Try/Catch</li>
                                                        <li>Try/Catch/Finally</li>
                                                    </ul>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className="w-[33.33%]  bg-gray-300 overflow-auto" style={{ scrollbarWidth: 'thin' }}>
                            <div className='p-5'>
                                <p className='font-bold'>
                                    Expressions kinds
                                </p>
                                <ul className="list-disc ml-4">
                                    {/* Operation, Read variable and Function call */}
                                    <li>Operation
                                        <ul className="list-disc ml-4">
                                            <li>Unary</li>
                                            <li>Binary</li>
                                            <li>Ternary</li>
                                        </ul>
                                    </li>
                                    <li>Read variable</li>
                                    <ul className="list-disc ml-4">
                                        <li>From variable ( of scope )</li>
                                        <li>From property</li>
                                        <ul className="list-disc ml-4">
                                            <li>By static name</li>
                                            <li>By dynamic name ( expression ) / array index</li>
                                        </ul>
                                    </ul>
                                    <li>Function call</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-[33.33%]  bg-gray-300 overflow-auto" style={{ scrollbarWidth: 'thin' }}>
                            <div className='p-5'>
                                <p className='font-bold'>
                                    Data kinds
                                </p>
                                <ul className="list-disc ml-4">
                                    <li>Number</li>
                                    <li>Boolean</li>
                                    <li>String</li>
                                    <li>Null</li>
                                    <li>Undefined</li>
                                    <li>Array</li>
                                    <li>Object</li>
                                    <li>Function</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 bg-gray-300">

                    <div className="h-[60%]  bg-gray-300  overflow-auto" style={{ scrollbarWidth: 'thin' }} >
                    </div>
                    <div className="h-[40%]  bg-gray-600">Right bottom part</div>
                </div>

            </div>
        </div>
    );
}

export { MainPage };