import React from 'react';

const Contact = () => {
    return (

        <section class="bg-white dark:bg-gray-900">
            <div class="max-w-6xl mx-auto p-6">
                <h1 class="text-4xl font-bold text-blue-900 flex items-center">
                    <i class="ph ph-envelope"></i>Contact Us
                </h1>
                <p class="text-gray-600 mt-2">Home - <span class="text-blue-500">Contact Us</span></p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                        <h2 class="text-2xl font-bold text-blue-900">Our Office Information</h2>
                        <hr class="my-4 border-gray-300"/>
                        <div class="mt-4 flex items-start gap-3">
                            <i class="ph ph-map-pin text-blue-600 text-xl"></i>
                            <div>
                                <p class="font-semibold">Manufacturing Unit:</p>
                                <p class="text-gray-600">Rongpur Part-II, Silchar, Cachar, Assam - 788009 (India)</p>
                            </div>
                        </div>
                        <div class="mt-4 flex items-start gap-3">
                            <i class="ph ph-map-pin text-blue-600 text-xl"></i>
                            <div>
                                <p class="font-semibold">Corporate Office:</p>
                                <p class="text-gray-600">Oberoi Commerz-II, 1st Floor, CTS No:95, 4B 3&4 590, Oberoi Garden City, Goregaon East (D2), Mumbai, Maharashtra - 400063 (India)</p>
                            </div>
                        </div>
                        <div class="mt-4 flex items-start gap-3">
                            <i class="ph ph-phone text-blue-600 text-xl"></i>
                            <div>
                                <p class="font-semibold">Phone:</p>
                                <p class="text-gray-600">Sales: +91 88001-96680</p>
                                <p class="text-gray-600">Front Desk: +91 11-4474-7712</p>
                            </div>
                        </div>
                        <div class="mt-4 flex items-start gap-3">
                            <i class="ph ph-envelope text-blue-600 text-xl"></i>
                            <div>
                                <p class="font-semibold">Email:</p>
                                <p class="text-gray-600">info@example.com</p>
                            </div>
                        </div>
                        <div class="mt-6">
                            <h3 class="text-lg font-bold text-blue-900 flex items-center gap-2">
                                <i class="ph ph-map"></i> Locate Us
                            </h3>
                            <iframe
                                class="w-full h-64 rounded-lg shadow-lg mt-3"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7890651686195!2d77.18387641531517!3d28.567171682448073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce21e5f8a2b0f%3A0xb7e1b8c8dc4e6a0!2sBhikaji%20Cama%20Place%2C%20New%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1614152656681!5m2!1sen!2sus"
                                allowfullscreen=""
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>

                    <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                        <h2 class="text-2xl font-bold text-blue-900 flex items-center gap-2">
                            <i class="ph ph-chat-text"></i> Get In Touch
                        </h2>
                        <p class="text-red-600 font-semibold mt-2">Do not use this form to communicate personal data.</p>
                        <hr class="my-4 border-gray-300"/>
                        <form class="mt-4">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="relative">
                                    <i class="ph ph-user text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"></i>
                                    <input type="text" placeholder="Your Name" class="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                                </div>
                                <div class="relative">
                                    <i class="ph ph-envelope text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"></i>
                                    <input type="email" placeholder="Your Email" class="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                                </div>
                            </div>
                            <div class="mt-4 relative">
                                <i class="ph ph-phone text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"></i>
                                <input type="text" placeholder="Phone Number" class="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>
                            <div class="mt-4 relative">
                                <i class="ph ph-chat-circle text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"></i>
                                <input type="text" placeholder="Subject" class="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>
                            <div class="mt-4 relative">
                                <i class="ph ph-pencil text-gray-500 absolute left-3 top-4"></i>
                                <textarea placeholder="Message" class="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                            </div>
                            <button class="mt-4 w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
                                <i class="ph ph-paper-plane"></i> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Contact;
