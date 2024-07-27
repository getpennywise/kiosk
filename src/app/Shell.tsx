// 'use client';

import { Card, Divider } from '@tremor/react';
import Kp from '../components/charts/Kp'
import Stock from '../components/charts/Stock'
function ContentPlaceholder() {
    return (
        <div className="relative h-full overflow-hidden rounded bg-gray-50">
            <svg className="absolute inset-0 h-full w-full stroke-gray-200" fill="none">
                <defs>
                    <pattern id="pattern-1" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
                    </pattern>
                </defs>
                <rect stroke="none" fill="url(#pattern-1)" width="100%" height="100%"></rect>
            </svg>
        </div>
    );
}

export default function Shell() {
    return (
        <>
            <div className="p-4 sm:p-6 lg:p-8 bg-white">
                <header>
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <h3 className="text-tremor-title font-semibold text-tremor-content-strong">
                            Good Morning
                        </h3>
                    </div>
                </header>
                <Divider />
                <main>
                    <Card className="rounded-tremor-small p-0 bg-white">
                        <div className="grid-cols-12 divide-y divide-tremor-border md:grid md:divide-x md:divide-y-0">
                            <div className="divide-y divide-tremor-border px-2 md:col-span-4">
                                <div className="h-28 py-2">
                                    <Kp />
                                </div>
                                <div className="h-28 py-2">

                                </div>
                                <div className="h-28 py-2">

                                </div>
                            </div>
                            <div className="h-56 p-2 md:col-span-8 md:h-auto">
                                <Stock />
                            </div>
                        </div>
                    </Card>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <Card className="rounded-tremor-small p-0 bg-white">
                            <div className="border-b border-tremor-border px-4 py-2">
                                <h3 className="text-tremor-default font-medium text-tremor-content-strong">
                                    Title
                                </h3>
                            </div>
                            <div className="h-60 p-2">
                                <ContentPlaceholder />
                            </div>
                        </Card>
                        <Card className="rounded-tremor-small p-0 bg-white">
                            <div className="border-b border-tremor-border px-4 py-2">
                                <h3 className="text-tremor-default font-medium text-tremor-content-strong">
                                    Title
                                </h3>
                            </div>
                            <div className="h-60 p-2">
                                <ContentPlaceholder />
                            </div>
                        </Card>
                        <Card className="rounded-tremor-small p-0 bg-white">
                            <div className="border-b border-tremor-border px-4 py-2">
                                <h3 className="text-tremor-default font-medium text-tremor-content-strong">
                                    Title
                                </h3>
                            </div>
                            <div className="h-60 p-2">
                                <ContentPlaceholder />
                            </div>
                        </Card>
                        <Card className="rounded-tremor-small p-0 bg-white">
                            <div className="border-b border-tremor-border px-4 py-2">
                                <h3 className="text-tremor-default font-medium text-tremor-content-strong">
                                    Title
                                </h3>
                            </div>
                            <div className="h-60 p-2">
                                <ContentPlaceholder />
                            </div>
                        </Card>
                    </div>
                </main>
            </div>
        </>
    );
}
